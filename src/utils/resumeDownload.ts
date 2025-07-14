import jsPDF from 'jspdf';

export const downloadResumeAsPDF = async (): Promise<void> => {
  // Show loading state (you can add a toast notification here if needed)
  console.log('Converting resume to PDF...');
  try {
    // Create a temporary image element
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    // Create a canvas to draw the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    return new Promise((resolve, reject) => {
      img.onload = async () => {
        try {
          // Set canvas dimensions to match image
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw the image on canvas
          ctx?.drawImage(img, 0, 0);
          
          // Convert canvas to blob
          canvas.toBlob(async (blob) => {
            if (!blob) {
              reject(new Error('Failed to create blob'));
              return;
            }
            
            // Convert blob to base64
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = reader.result as string;
              
              // Create PDF
              const pdf = new jsPDF('p', 'mm', 'a4');
              const imgWidth = 210; // A4 width in mm
              const pageHeight = 295; // A4 height in mm
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
              let heightLeft = imgHeight;
              let position = 0;
              
              // Add image to PDF
              pdf.addImage(base64, 'JPEG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
              
              // Add additional pages if needed
              while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(base64, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
              }
              
              // Download the PDF
              pdf.save('bhoomi_khandelwal_resume.pdf');
              console.log('Resume downloaded successfully as bhoomi_khandelwal_resume.pdf');
              resolve();
            };
            reader.readAsDataURL(blob);
          }, 'image/jpeg', 0.95);
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      // Load the resume image
      img.src = '/resume.jpg';
    });
  } catch (error) {
    console.error('Error downloading resume:', error);
    throw error;
  }
};

// Fast function to download existing PDF directly
export const downloadExistingResumePDF = (): void => {
  try {
    // Create a link element for instant download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'bhoomi_khandelwal_resume.pdf';
    link.style.display = 'none';
    
    // Trigger immediate download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Resume PDF downloaded successfully as bhoomi_khandelwal_resume.pdf');
  } catch (error) {
    console.error('Error downloading existing PDF:', error);
    // Fallback to image conversion if PDF doesn't exist
    console.log('Falling back to image conversion...');
    downloadResumeAsPDF().catch(fallbackError => {
      console.error('Both PDF download and image conversion failed:', fallbackError);
      throw fallbackError;
    });
  }
}; 