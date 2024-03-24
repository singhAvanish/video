import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowPointer,
  faHand,
  faCrop,
  faRotateRight,
  faRotateLeft,
  faScissors,
  faCopy,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faWindowMaximize,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import "./editor.css";
import VideoTimeline from "./VideoTimeline";

const Editor = () => {
  const [videoFile, setVideoFile] = useState([]);
  const [video, setVideo] = useState([]);
  const [zoom, setZoom] = useState(1);
  const [videoDuration, setVideoDuration] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [rotationX, setRotationX] = useState(0);
const [rotationY, setRotationY] = useState(0);
const [rotationZ, setRotationZ] = useState(0);
const [x, setX] = useState(0);
const [y, setY] = useState(0);
const [z, setZ] = useState(0);

// ...

<div style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}>
  Your content here
</div>

  const videoRef = useRef(null);

  const fileInputRef = useRef(null);

  const handleOnDrop = (e) => {
    e.preventDefault();

    const index = e.dataTransfer.getData("text/plain");
    const file = videoFile[index];

    setVideo([file]); 
    setVideoFile(videoFile.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e) => {
    const file = Array.from(e.target.files);
    setVideoFile([...videoFile, ...file]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="edit-main">
      <div className="edit1">
        <div className="edit-sub1">
          <div className="assets">
            <span>Assets</span>
            <div>
              {videoFile.length > 0 && (
                <div className="vid">
                  {videoFile.map((file, index) => (
                    <div className="video-list" key={index}>
                      <video
                        src={URL.createObjectURL(file)}
                        draggable
                        onDragStart={(e) =>
                          e.dataTransfer.setData("text/plain", index)
                        }
                      />
                      <audio src={URL.createObjectURL(file)} draggable />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="asset-sub">
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
             <span>Add Video.</span>
            <button onClick={handleButtonClick}>
            
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div className="edit-sub2">
          <div className="sub2-1">
            <span>
              <FontAwesomeIcon icon={faArrowPointer} />
            </span>
            <span>
              <FontAwesomeIcon icon={faHand} />
            </span>
            <span>
              <FontAwesomeIcon icon={faCrop} />
            </span>
            <span>
              <input
              className="num"
                type="number"
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
              />
              %
            </span>
            <span>Drag video from Asset.</span>
          </div>
         

          <div
            className="sub2-2"
            onDrop={handleOnDrop}
            onDragOver={(e) => e.preventDefault()}
          >
          
            {video.map((file, index) => (
              <div key={index}>
                <video
                
                  ref={videoRef}
                  src={URL.createObjectURL(file)}
                  style={{ 
    transform: `scale(${zoom}) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) translate3d(${x}px, ${y}px, ${z}px)`, 
    opacity: `${opacity}`
}}
                  onLoadedMetadata={(e) => setVideoDuration(e.target.duration)}
                />
               
              </div>
            ))}
          </div>
        </div>
        <div className="edit-sub3">
          <div className="sub3-1">
            <span>
              <FontAwesomeIcon icon={faFileExport} />
            </span>
            <span>
              <button className="Edit-button">Export</button>
            </span>
          </div>

          <div className="sub3-2">
            <span className="properties">Properties</span>
            <div className="prop-1">
              <div className="scale s">
                <span>Scale</span>
                <span>
                  <input type="range" min="0" max="10" step="0.1" value={zoom} onChange={(e)=>setZoom(e.target.value)}></input>
                </span>
                <span>
                  <input className="num" value={zoom} onChange={(e)=>setZoom(e.target.value)} type="number"></input>
                </span>
              </div>
              <div className="opacity s">
                <span>Opacity</span>
                <span>
                  <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e)=>(parseFloat(e.target.value))}></input>
                </span>
                <span>
                  <input className="num" value={opacity} onChange={(e)=>setOpacity(e.target.value)} type="number"></input>
                </span>
              </div>
              <div className="rotation s">
                <span>Rotation</span>

                <div className="rotation-axis">
                  <div className="rot z">
                    <span>
                      <FontAwesomeIcon icon={faRotateRight} />Z
                    </span>
                    <span>
                      <input className="num" value={rotationZ} onChange={(e)=>setRotationZ(e.target.value)} type="number" ></input>
                    </span>
                  </div>

                  <div className="rot y">
                    <span>
                      <FontAwesomeIcon icon={faRotateRight} />Y
                    </span>
                    <input className="num" value={rotationY} onChange={(e)=>setRotationY(e.target.value)} type="number"></input>
                  </div>
                  <div className="rot x">
                    <span>
                      <FontAwesomeIcon icon={faRotateRight} />X
                    </span>
                    <input className="num" value={rotationX} onChange={(e)=>setRotationX(e.target.value)} type="number"></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="position">
              <span className="ps">Position</span>

              <div className="position-axis">
                <div>
                  <span>X</span>
                  <span>
                    <input className="num" value={x} onChange={(e)=>setX(e.target.value)} type="number"></input>
                  </span>
                </div>

                <div>
                  <span>Y</span>
                  <input className="num" value={y} onChange={(e)=>setY(e.target.value)} type="number"></input>
                </div>
                <div>
                  <span>Z</span>
                  <input className="num" value={z} onChange={(e)=>setZ(e.target.value)} type="number"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player">
        <button className="Edit-button" onClick={() => videoRef.current && videoRef.current.play()}>
          play
        </button>
        <button className="Edit-button" onClick={() => videoRef.current && videoRef.current.pause()}>
          Pause
        </button>

        <input
          type="range"
          min="0"
          max={videoDuration}
          value={videoRef.current?.currentTime || 0}
          onChange={(e) =>
            (videoRef.current.currentTime = Number(e.target.value))
          }
        />
      </div>
      <div className="tools">
        <div className="tool-1">
          <span>
            <FontAwesomeIcon icon={faRotateLeft} />
          </span>
          <span>
            <FontAwesomeIcon icon={faRotateRight} />
          </span>
          <span>
            <FontAwesomeIcon icon={faScissors} />
          </span>
          <span>
            <FontAwesomeIcon icon={faCopy} />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowMaximize} />
          </span>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </span>
          <span>
            <input type="range"></input>
          </span>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
          </span>
        </div>
        <div className="too-2">
        <VideoTimeline></VideoTimeline>
        </div>
        <div className="tool-3"></div>
      </div>
    </div>
  );
};

export default Editor;
