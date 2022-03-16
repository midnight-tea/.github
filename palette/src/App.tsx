import { documentToSVG } from 'dom-to-svg';
import { useEffect } from 'react';
import './App.css';


function App() {
  const palette = [
    "#FAB795",
    "#F09483",
    "#E95678",
    "#27D797",
    "#25B0BC",
    "#267bd5",
    "#B877DB",
    "#1C1E26",
    "#1a1c23",
    "#252731",
    "#333544",
    "#41495b",
    "#606060",
    "#a9afb3",
    "#FDF0ED"
  ];

  useEffect(() => {
    const svgDocument = documentToSVG(document)
    const svgString = new XMLSerializer().serializeToString(svgDocument)

    const blob = new Blob([svgString]);
    const anchor = document.createElement("a");

    anchor.download = "palette.svg";
    anchor.href = URL.createObjectURL(blob);

    anchor.click();
    anchor.remove();
  }, []);

  return (
    <div>
      <p>Color Palette</p>

      <div className="content">
        {
          palette.map(x =>
            <div className="parent" key={x}>
              <div className="swatch" style={{ backgroundColor: x }} />
              <div className="description">{x.toUpperCase()}</div>
            </div >
          )
        }
      </div >
    </div>
  )
}

export default App
