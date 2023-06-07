import React from 'react'
import '../css/Requirements.scss';

const Requirement = () => {
    return (
        <section className="system-requirement-section" id="systemrequirements">
            <div className="titles">
                <h1 className="display-1" data-content="System Requirements">
                    <span>System Requirements</span>
                </h1>
                <hr className="line-separator"/>
            </div>
            
        
            <div className="system-requirement-container">
                <div className="requirement-content cel-1">
                    <h4 className="system-name">OS:</h4>
                    <p className="system-info">
                        Windows 7 64-bit only
                        (No OSX support at this time)
                    </p>
                </div>
                <div className="requirement-content cel-2">
                    <h4 className="system-name">PROCESSOR:</h4>
                    <p className="system-info">
                    Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
                    </p>
                </div>
                <div className="requirement-content cel-3">
                    <h4 className="system-name">MEMORY:</h4>
                    <p className="system-info">
                        8 GB RAM
                    </p>
                </div>
                <div className="requirement-content cel-4">
                    <h4 className="system-name">STORAGE:</h4>
                    <p className="system-info">
                        8 GB available space
                    </p>
                </div>
                <div className="requirement-content cel-5">
                    <h4 className="system-name">GRAPHICS:</h4>
                    <p className="system-info">
                        NVIDIA GeForce GTX 660 2GB or 
                        AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Requirement
