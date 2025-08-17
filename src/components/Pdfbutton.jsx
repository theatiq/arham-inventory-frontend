import jsPDF from "jspdf";

const PdfButton = ({ products }) => {
  const generatePdf = () => {
    const doc = new jsPDF();
    let y = 10;
    products.forEach((p) => {
      doc.text(`${p.name} - $${p.price} - Qty: ${p.quantity}`, 10, y);
      y += 10;
    });
    doc.save("products.pdf");
  };

  return <button onClick={generatePdf}>Export PDF</button>;
};

export default PdfButton;
