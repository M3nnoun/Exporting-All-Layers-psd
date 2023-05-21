// Export Layers to PNG

// Set the active document
var doc = app.activeDocument;

// Set the export options
var exportOptions = new ExportOptionsSaveForWeb();
exportOptions.format = SaveDocumentType.PNG;
exportOptions.PNG8 = false; // Set to true for PNG-8 format
exportOptions.transparency = true; // Set to false for no transparency
exportOptions.interlaced = false;
exportOptions.quality = 100;

// Set the export folder path
var exportPath = "~/Desktop/"; // Specify your desired export path

// Loop through each layer and export as PNG
for (var i = 0; i < doc.layers.length; i++) {
  var layer = doc.layers[i];
  
  // Skip hidden layers
  if (!layer.visible) {
    continue;
  }
  
  // Make only the current layer visible
  for (var j = 0; j < doc.layers.length; j++) {
    doc.layers[j].visible = false;
  }
  layer.visible = true;

  // Export the current layer
  var exportFileName = layer.name + ".png"; // Use the layer name as the file name
  doc.exportDocument(new File(exportPath + exportFileName), ExportType.SAVEFORWEB, exportOptions);
  
  // Show all layers again
  for (var k = 0; k < doc.layers.length; k++) {
    doc.layers[k].visible = true;
  }
}
