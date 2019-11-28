import React, {Component} from 'react';
import MasterCover from "../MasterPages/MasterCover";
import {Link} from "react-router-dom";
import classes from './Resume.module.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <MasterCover title="Resume & Info"/>
                <div className={`shadow-lg bg-gray   ${classes.bodyDiv}`}>
                    <div className={`d-flex align-items-center flex-column justify-content-center flex-wrap p-4`}>
                        <p><img src={require("../assets/Rayhan.jpg")} className={`shadow-lg ${classes.resumeImageTag}`}
                                alt="My pic"></img></p>
                        <h3 className={`${classes.resumeNamePTag}`}>M M Rayhan Parvez</h3>
                        <h5 className={`mb-3 ${classes.resumePostPTag}`}>Web Developer</h5>
                        <a href="https://drive.google.com/file/d/1iPEGDti3v3P8bKtecpz1dDY3Da4YEGTj/view?usp=sharing"
                           target="_blank" className={`btn btn-outline-light  ${classes.resumeButtonTag}`}>Download
                            CV</a>

                    </div>

                </div>
                <div className={`shadow-lg rounded m-4 row px-3 ${classes.childDivBody}`}>
                    <div className={`shadow-lg rounded col-md-5 my-3 py-4 ${classes.childDiv1}`}>
                        <h4 className={`${classes.resumeNamePTag}`}>Technical Qualification</h4>
                        <p className={`${classes.resumeNamePTag}`}><i className="fa cardLink fa-globe"></i> Web
                            Development</p>
                        <span className="badge badge-light m-2 p-2">React Js</span>
                        <span className="badge badge-light m-2 p-2">JavaScript</span>
                        <span className="badge badge-light m-2 p-2">Arduino Uno</span>
                        <span className="badge badge-light m-2 p-2">C</span>
                        <span className="badge badge-light m-2 p-2">C++</span>
                        <span className="badge badge-light m-2 p-2">Python</span>
                        <span className="badge badge-light m-2 p-2">Jquery</span>
                        <span className="badge badge-light m-2 p-2">Bootstrap</span>
                        <span className="badge badge-light m-2 p-2">HTML</span>
                        <span className="badge badge-light m-2 p-2">CSS</span>
                        <span className="badge badge-light m-2 p-2">Material Design</span>
                        <span className="badge badge-light m-2 p-2">JSON</span>
                        <span className="badge badge-light m-2 p-2">PHP</span>
                        <span className="badge badge-light m-2 p-2">OOP</span>
                        <span className="badge badge-light m-2 p-2">Restfull API</span>
                        <span className="badge badge-light m-2 p-2">Firebase DB</span>
                        <span className="badge badge-light m-2 p-2">MySqL</span>
                        <span className="badge badge-light m-2 p-2">SQL</span>

                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Others Qualification</h4>
                        <span className="badge badge-light m-2 p-2">Computer Networking</span>
                        <span className="badge badge-light m-2 p-2">Troubleshooting</span>
                        <span className="badge badge-light m-2 p-2">Embedded Systems</span>
                        <span className="badge badge-light m-2 p-2">Microsoft Office</span>
                        <span className="badge badge-light m-2 p-2">Windows, Linux OS</span>
                        <span className="badge badge-light m-2 p-2">SSIS</span>
                        <span className="badge badge-light m-2 p-2">Adobe Photoshop</span>
                        <span className="badge badge-light m-2 p-2">Video Editing</span>

                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Hobby</h4>
                        <span className="badge badge-light m-2 p-2">Web Developing</span>
                        <span className="badge badge-light m-2 p-2">Photography</span>
                        <span className="badge badge-light m-2 p-2">Football</span>
                        <span className="badge badge-light m-2 p-2">Travelling</span>

                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Final Year Project</h4>
                        <p className={`${classes.resumeNamePTag}`}>Reduce Traffic Jam & Safe Journey To The School</p>
                        <p className={`text-justify ${classes.resumeNamePTag2}`}>
                            An IOT Based Smart School Bus Tracking System.We Did It As Final Year Project Under
                            Supervision Of Dr.Fernaz Narin
                            Nur Assistant Professor, Department Of Computer Science And
                            Engineering, Daffodil International University.
                        </p>
                        <p className={`${classes.resumeNamePTag}`}>Key Features</p>
                        <span
                            className="badge badge-light m-2 p-2 text-wrap">Two Step Authentication(Fingerprint, RFID)</span>
                        <span
                            className="badge badge-light m-2 p-2">Realtime Students Status On Android Application.</span>
                        <span
                            className="badge badge-light m-2 p-2">Realtime Bus Location Status On The Google Map</span>
                        <span className="badge badge-light m-2 p-2">Notify Guardian Through Android Application</span>
                        <p className={`m-2 ${classes.resumeNamePTag}`}>Tools And Platforms</p>
                        <span className="badge badge-light m-2 p-2">Arduino IDE(C++, Java)</span>
                        <span className="badge badge-light m-2 p-2">Firebase Database</span>
                        <span className="badge badge-light m-2 p-2">Google Maps APIs</span>
                        <span className="badge badge-light m-2 p-2">Google Spreadsheet</span>

                    </div>
                    <div className={`shadow-lg rounded col-md-5 offset-md-2 my-3 p-4  ${classes.childDiv1}`}>
                        <h4 className={`${classes.resumeNamePTag}`}>Career objectives</h4>
                        <p className={`text-justify ${classes.resumeNamePTag2}`}>
                            I am a highly professional, motivated and dedicated individual with strong communication and
                            interpersonal skills, To Build Up My Career With A Well Known Organization Where I Can Show
                            My Immense Aspiration To Become A Quick Learner And To Prove Myself As Sincere, Energetic
                            And Devoted Educator Through Extensive Hard Working &amp; Integrity, I am working in
                            programming and web world for more than 1 years.Being a passionate individual with
                            experiences in business field having Computer Science &amp; Engineering background will help
                            to use my potentials properly by holding this position. As the position suites me best so
                            the career path will be much more flexible than other options. My over all skill makes me a
                            Web developer, so you can hire me for your projects. Thanking you in advance for your time.
                        </p>
                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Field Of Interest</h4>
                        <span className="badge badge-light m-2 p-2">Web Development</span>
                        <span className="badge badge-light m-2 p-2">Internet Of Things</span>

                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Undergraduate Project</h4>
                        <span className="badge badge-light m-2 p-2">Blood Management System(Java)</span>
                        <span className="badge badge-light m-2 p-2">Home Rental System(PHP)</span>
                        <span className="badge badge-light m-2 p-2">Traffic Light Control(Microprocessor 8086)</span>
                        <span
                            className="badge badge-light m-2 p-2">Traffic Light Control System (Computer Graphics)</span>
                        <span
                            className="badge badge-light m-2 p-2">Online Bus Ticket Management System (Database)</span>
                        <span className="badge badge-light m-2 p-2">Home Automation (Embedded System)</span>
                        <span
                            className="badge badge-light m-2 p-2">Smart School Bus Tracking System(Final Year Project)</span>


                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Experience</h4>
                        <span className="badge badge-light m-2 p-2">Teacher : E-Haque Couching Centre</span>
                        <span className="badge badge-light m-2 p-2">Executive : ServicEngine Ltd (Monem Group)</span>
                        <span className="badge badge-light m-2 p-2">Website Development</span>

                        <h4 className={`mt-4 ${classes.resumeNamePTag}`}>Scholarship</h4>
                        <span className="badge badge-light m-2 p-2">Government Scholarship On Primary Education</span>


                    </div>
                </div>
                <div
                    className={`shadow-lg rounded m-4 d-flex align-items-center flex-column justify-content-center flex-wrap p-4 ${classes.bodyDiv}`}>
                    <h3 className={`${classes.resumeNamePTag}`}>Educational Qualification</h3>
                    <div className={"table-responsive-md table-responsive-sm"}>
                        <table className={`table table-bordered mt-4 ${classes.tableTag}`}>
                            <tr>
                                <th>Examination</th>
                                <th>Group</th>
                                <th>Passing Year</th>
                                <th>GPA/CGPA</th>
                                <th>Board/City</th>
                                <th>Institution</th>
                            </tr>
                            <tr>
                                <td>Secondary School Certificate</td>
                                <td>Science</td>
                                <td>2012</td>
                                <td>4.81 (Out Of 5)</td>
                                <td>Jashore</td>
                                <td>Hamidpur High School</td>
                            </tr>
                            <tr>
                                <td>Higher Secondary Certificate</td>
                                <td>Science</td>
                                <td>2012-2014</td>
                                <td>4.90 (Out Of 5)</td>
                                <td>Jashore</td>
                                <td>Hamidpur Al-Hera Degree College</td>
                            </tr>
                            <tr>
                                <td>B.Sc in Computer Science & Engineering</td>
                                <td>Bachelor of Science</td>
                                <td>2014-2018</td>
                                <td>3.73 (Out Of 4)</td>
                                <td>Dhaka</td>
                                <td>Daffodil International University</td>
                            </tr>

                        </table>
                    </div>
                </div>


                <div
                    className={`shadow-lg rounded m-4 d-flex align-items-center flex-column justify-content-center flex-wrap p-4 ${classes.bodyDiv}`}>
                    <h2 className={` ${classes.resumeNamePTag}`}>Research & Publications</h2>
                    <h3 className={` my-2 ${classes.resumeNamePTag}`}>Research</h3>

                    <h5 className={` my-2 ${classes.resumeNamePTag}`}>An Intelligent and Secured Tracking System for
                        Monitoring
                        School Bus</h5>

                    <p className={`${classes.resumeNamePTag2}`}>Presented in International Conference on Computer
                        Communication and Informatics (ICCCI 2019 Coimbatore, Tamil Nadu, India) </p>

                    <h2 className={` ${classes.resumeNamePTag}`}>IEEE Xplore Publications</h2>
                    <p className={`${classes.resumeNamePTag2}`}>An Intelligent and Secured Tracking System for
                        Monitoring School Bus.</p>
                    <p className={`${classes.resumeNamePTag2}`}>Date of Conference: 23-25 Jan. 2019</p>
                    <p className={`${classes.resumeNamePTag2}`}>Published On 02 September 2019</p>
                    <p className={`${classes.resumeNamePTag2}`}>Publisher: IEEE</p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/8822187?fbclid=IwAR3uWuj6Byl7_HkcLaohM7YXGckisIDxiMFXOCMRoXgsbSrIZt8snP5cDS8"
                       target="_blank" className={`btn btn-outline-light  ${classes.resumeButtonTag}`}>View Paper</a>


                </div>


                <div className={`shadow-lg rounded m-4 row px-3 ${classes.childDivBody}`}>
                    <div className={`shadow-lg rounded col-md-5 my-3 py-4 ${classes.childDiv1}`}>
                        <h4 className={`${classes.resumeNamePTag}`}>Personal Information</h4>
                        <div className={"table-responsive-md table-responsive-sm"}>
                            <table className={`table table-borderless mt-4 ${classes.tableTag}`}>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>M M Rayhan Parvez</td>

                                </tr>
                                <tr>
                                    <td>Father’s Name</td>
                                    <td>:</td>
                                    <td>MD Rafiqul Islam</td>

                                </tr>
                                <tr>
                                    <td>Mother’s Name</td>
                                    <td>:</td>
                                    <td>Marufa Begum</td>

                                </tr>
                                <tr>
                                    <td>Date Of Birth</td>
                                    <td>:</td>
                                    <td>01/02/1997</td>

                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>:</td>
                                    <td>B Negative</td>

                                </tr>
                                <tr>
                                    <td>Sex</td>
                                    <td>:</td>
                                    <td>Male</td>

                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td>:</td>
                                    <td>Bangladeshi</td>

                                </tr>
                                <tr>
                                    <td>Religion</td>
                                    <td>:</td>
                                    <td>Islam</td>

                                </tr>


                            </table>
                        </div>

                    </div>
                    <div className={`shadow-lg rounded col-md-5 offset-md-2 my-3 p-4  ${classes.childDiv1}`}>
                        <h4 className={`${classes.resumeNamePTag}`}>Permanent Address</h4>
                        <div className={"table-responsive-md table-responsive-sm"}>
                            <table className={`table table-borderless mt-4 ${classes.tableTag}`}>
                                <tr>
                                    <td>House</td>
                                    <td>:</td>
                                    <td>286/1</td>

                                </tr>
                                <tr>
                                    <td>Road</td>
                                    <td>:</td>
                                    <td>Jhum Jhum Pur</td>

                                </tr>
                                <tr>
                                    <td>Village</td>
                                    <td>:</td>
                                    <td>Hamidpur</td>

                                </tr>
                                <tr>
                                    <td>Post</td>
                                    <td>:</td>
                                    <td>Jashore Sadar</td>

                                </tr>
                                <tr>
                                    <td>Post Code</td>
                                    <td>:</td>
                                    <td>7400</td>

                                </tr>
                                <tr>
                                    <td>Thana</td>
                                    <td>:</td>
                                    <td>Kotwali</td>

                                </tr>
                                <tr>
                                    <td>District</td>
                                    <td>:</td>
                                    <td>Jashore</td>

                                </tr>
                                <tr>
                                    <td>Division</td>
                                    <td>:</td>
                                    <td>Khulna</td>

                                </tr>


                            </table>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Resume;