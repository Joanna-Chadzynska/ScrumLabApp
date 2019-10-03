import React, { PureComponent } from "react";
import { Button } from "antd";

// npm i jspdf
import jsPDF from "jspdf";

// npm i jspdf-autotable
import "jspdf-autotable";

export default class GeneratePdf extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      array1: this.props.recipePdf
    };
  }

  // JSpdf Generator For generating the PDF
  jsPdfGenerator = () => {
    let data = [];
    let count = 1;

    var doc = new jsPDF("p", "pt");
    doc.page = 1;

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    var header = function() {
      var imgData = doc.setFontStyle("normal"); // Convert the image to base64 and place it here //

      // move_from_left, move_from_height, width, height
      doc.addImage(imgData, "JPEG", 5, 10, width - 10, 65);

      doc.setFontSize(14);
      doc.setFontStyle("bold");

      // move_from_left, move_from_height
      doc.text(200, 100, "Something something");
    };

    var footer = function() {
      var imgData = // Convert the image to base64 and place it here //
        //print number bottom right

        doc.setFontSize(7);
      doc.text(width - 40, height - 30, "Page - " + doc.page);
      doc.page++;

      //_________________________________

      doc.addImage(imgData, "JPEG", 5, height - 25, width - 10, 30);
    };

    var options = {
      beforePageContent: header,
      afterPageContent: footer,
      theme: "grid",
      columnStyles: {
        count: { columnWidth: 30 },
        c1: { columnWidth: 50 },
        c2: { columnWidth: 80 },
        c3: { columnWidth: 30 },
        c4: { columnWidth: 50, halign: "right" }
      },

      headStyles: { fillColor: "white", textColor: "black" },
      style: { cellWidth: "auto" },
      margin: { top: 150, bottom: 100, horizontal: 10 }
    };

    // Data Processing
    this.state.array1.map((item, index) => {
      let b = {
        count: count,
        c1: item.c1,
        c2: item.c2,
        c3: item.c3,
        c4: item.c4
      };

      count++;
      data.push(b);
    });

    doc.setFontSize(12);
    doc.line(0, 145, width, 145);

    // doc.autoTable(col, data, options);

    doc.save("Generate.pdf");
  };

  render() {
    return (
      <Button onClick={this.jsPdfGenerator} type='primary'>
        {" "}
        Generate PDF{" "}
      </Button>
    );
  }
}
