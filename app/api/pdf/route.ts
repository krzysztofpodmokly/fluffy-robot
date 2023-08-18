import { NextResponse } from "next/server"
import puppeteer from 'puppeteer'

export async function GET() {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle0' })
  await page.emulateMediaType('screen');
  // await page.setContent('<div>Hello</div>')

  const pdfBuffer = await page.pdf({
    path: 'public/cv.pdf',
    format: 'A4',
    scale: 1,
    margin: {
      // top: '10mm',
      // left: '10mm',
      // right: '10mm',
      // bottom: '10mm',
    },
  })

  await browser.close();

  return new NextResponse(pdfBuffer);
}