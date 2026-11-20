import AppKit
import CoreImage
import Vision

guard CommandLine.arguments.count == 3 else {
  fputs("Usage: portrait-cutout input.png output.png\n", stderr)
  exit(1)
}

let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])
guard let source = CIImage(contentsOf: sourceURL) else {
  fputs("Could not load image\n", stderr)
  exit(1)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.usesCPUOnly = true
request.outputPixelFormat = kCVPixelFormatType_OneComponent8
try VNImageRequestHandler(url: sourceURL).perform([request])
guard let result = request.results?.first else {
  fputs("No person mask generated\n", stderr)
  exit(1)
}

let rawMask = CIImage(cvPixelBuffer: result.pixelBuffer)
let scale = CGAffineTransform(
  scaleX: source.extent.width / rawMask.extent.width,
  y: source.extent.height / rawMask.extent.height
)
let mask = rawMask.transformed(by: scale)
let clear = CIImage(color: .clear).cropped(to: source.extent)
guard let blend = CIFilter(name: "CIBlendWithMask") else {
  fputs("Could not create mask blend\n", stderr)
  exit(1)
}
blend.setValue(source, forKey: kCIInputImageKey)
blend.setValue(clear, forKey: kCIInputBackgroundImageKey)
blend.setValue(mask, forKey: kCIInputMaskImageKey)
guard let composited = blend.outputImage,
      let rendered = CIContext().createCGImage(composited, from: source.extent),
      let png = NSBitmapImageRep(cgImage: rendered).representation(using: .png, properties: [:]) else {
  fputs("Could not render PNG\n", stderr)
  exit(1)
}
try png.write(to: outputURL)
