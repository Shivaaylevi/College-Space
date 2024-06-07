import React from 'react'
import "../css/FirstYear.css"
const PDF_FILE_URL="http://localhost:3000/DBMS_papers.pdf"
const PDF_question_URL="http://localhost:3000/Unit-2 (Quantum-I tutorial with solutions).pdf"
function AppliedPhysics() {
  const downloadFileAtUrl=(url)=>{
    const fileName=url.split("/").pop()
    const aTag=document.createElement("a")
    aTag.href=url
    aTag.setAttribute("download",fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove();
  }
  return (
    <div style={{backgroundColor:"rgb(51, 51, 51)",color:"white", fontSize:"15px"}}>
<div className='br container subj1'>
<h4> UNIT I</h4>
<h5>Quantum Physics:</h5>Introduction to Quantum hypothesis, Matter wave concept, Wave Group and
Particle velocity and their relations, Uncertainty principle with elementary proof and applications to
microscope and single slit, Compton Effect, Wave function and its physical significance. Development
of time dependent and time independent Schrodinger wave equation, Applications of time independent
Schrodinger wave equation.
</div>
<br/>
<div className='br container subj2'>
<h4>UNIT II</h4>
<h5>Solid State Physics:</h5>Free electron model, Qualitative Analysis of Kronig Penney Model, Effective
mass, Fermi level for Intrinsic and Extrinsic semiconductors, P-N junction diode, Zener diode, Tunnel
diode, Photodiode, Solar- cells, Hall Effect, Introduction to Superconductivity, Meissner effect, Type I
& II Superconductors<br/>
</div>
<br/>
<div className='br container subj3'>
<h4>UNIT III</h4>
<h5>Nuclear Physics:</h5> Nuclear Structure & Properties Nuclear models: Liquid drop with semi-empirical
mass formula & shell model. Particle accelerators: Cyclotron, Synchrotron, Betatron. Counters and
Detectors: Giger-Muller counters, Bainbridge Mass Spectrograph and Auston Mass Spectrograph.<br/>
</div>
<br/>
<div className='br container subj4'>
<h4>UNIT IV</h4>
<h5>Laser & Fiber Optics:</h5> Stimulated and Spontaneous Emission, Einstein‟s A&B Coefficients,
Population Inversion, Pumping, Techniques of Pumping, Optical Resonator, Properties and
Applications of Laser, Ruby, Nd:YAG, He-Ne lasers.
Introduction to Optical fibre, Acceptance angle and cone, Numerical Aperture, V- Number, Ray theory
of propagation through optical fibre, Pulse dispersion , applications of optical fibre.<br/>
</div>
<br/>
<div className='br container subj5'>
<h4>UNIT V</h4>
<h5>Wave Optics:</h5> Introduction to Interference, Fresnel's Bi-prism, Interference in Thin films, Newton's
rings experiment, Michelson‟s interferometer and its application, Introduction to Diffraction and its
Types, Diffraction at single slit, double slit, resolving power, Rayleigh criterion, Resolving power of
grating, Concept of polarized light, Double refraction, quarter and half wave plate, circularly &
elliptically polarized light.
</div>
    <button className='pyquestionpaper' onClick={()=>{downloadFileAtUrl(PDF_FILE_URL)}}>Paper</button>
    <button className='pyquestionpaper' onClick={()=>{downloadFileAtUrl(PDF_question_URL)}}>Notes</button>
    </div>
  )
}

export default AppliedPhysics