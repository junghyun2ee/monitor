import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Viewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file="/2021010712163768K_01_14.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
         <span onClick={() => this.state.pageNumber > 1 ?
          	this.setState({numPages : this.state.numPages,
            	pageNumber : this.state.pageNumber-1}) : null}>
            &lt;
         </span>
         <span>Page {pageNumber} of {numPages}</span>
         <span onClick={() => this.state.ppageNumber < numPages ?
         	this.setState({numPages : this.state.numPages,
            	pageNumber : this.state.pageNumber+1}) : null}>
            &gt;
         </span>
        </p>
      </div>
    );
  }
}

export default Viewer;