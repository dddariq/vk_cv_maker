import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportPDF(elementId, fileName) {
  const el = document.getElementById(elementId);
  const canvas = await html2canvas(el, { useCORS: true });
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${fileName}.pdf`);
}
