import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputImagePath = path.join(process.cwd(), "public", "icons", "icon-512x512.jpg");
const outputDir = path.join(process.cwd(), "public", "icons");

async function generateIcons() {
  if (!fs.existsSync(inputImagePath)) {
    console.error(`Input image not found: ${inputImagePath}`);
    process.exit(1);
  }

  const sizes = [192, 512, 180];
  
  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
    await sharp(inputImagePath)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated: ${outputPath}`);
  }
}

generateIcons().catch(console.error);
