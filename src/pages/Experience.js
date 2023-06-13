import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import {VerticalTimeline, VerticalTimelineElement,
}  from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"


function Experience() {
    return (
        <div className="experience"> 

        <VerticalTimeline lineColor="#3e497a"> 

            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            date="2021 - Current" iconStyle={{background: "#e9d35b", color: "#ffffff"}} icon={<BadgeIcon />}
            > <h3 className="vertical-timeline-element-title"> Hogarth London</h3> 
            <h4>Graphics Production Artist</h4>
            <p> I possess a diverse skill set in the field of graphic design and production. With proficiency in industry-standard software and a keen eye for detail, I specialize in transforming creative concepts into visually appealing and high-quality designs. I excel in creating print-ready artwork, preparing files for production, and ensuring adherence to brand guidelines. <br></br> <br></br> With a strong understanding of color theory, typography, and layout principles, I am capable of producing engaging designs for various marketing materials, including Markeint Pages, Web Banners, Direct Email, and Landing Pages. Additionally, I am well-versed in collaborating with cross-functional teams, communicating effectively, and managing multiple projects within deadlines.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            date="2015 - 2020" iconStyle={{background: "#3e497a", color: "#ffffff"}} icon={<BadgeIcon />}
            > <h3 className="vertical-timeline-element-title"> McCANN London</h3> 
            <h4>Creative Artworker/Designer</h4>
            <p>
            As a Creative Artworker/Designer, I have successfully applied client brand guidelines, technical specifications, photography, and supplied text to create impactful designs for renowned brands such as Just Eat, Subway, Premier Foods, eBay, Chivas, Bayer, Reckitt Benckiser, Microsoft, Mastercard, TSB, and Qatar Financial Centre. <br></br> <br></br>
             By effectively interpreting and implementing these elements, I have consistently delivered visually compelling artwork that aligns with client expectations and enhances brand identities. My meticulous attention to detail and expertise in utilizing design software have enabled me to produce print-ready materials that meet the highest standards of quality and professionalism.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2023" iconStyle={{background: "#3e497a", color: "#ffffff"}} icon={<SchoolIcon />}
            > <h3 className="vertical-timeline-element-title"> University of Birmingham</h3> 
            <h4>Skills Boot Camp in Front-End Web Development</h4>
            <p>I completed an intensive and immersive front-end web development boot camp focused on building a solid foundation in HTML, CSS, and JavaScript. Developed proficiency in responsive design principles and gained hands-on experience with popular frameworks like React. <br></br> <br></br> Successfully completed a series of challenging individual and group projects, including building fully functional websites and web applications. Received recognition for exceptional problem-solving abilities, attention to detail, and strong collaboration skills within a team-based learning environment. Demonstrated consistent growth and dedication to mastering cutting-edge web development technologies and industry best practices.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date=" 2021 - 2022 " iconStyle={{background: "#3e497a", color: "#ffffff"}} icon={<SchoolIcon />}
            > <h3 className="vertical-timeline-element-title"> Chartered Management Institute (CMI)</h3> 
            <h4>CMI Level 3 Diploma Certificate in Management and Leadership</h4>
            <p>Successfully completed the CMI Level 3 Diploma in Management and Leadership, a comprehensive program designed to enhance leadership and management skills. <br></br> <br></br> Developed a solid understanding of key management principles, including effective communication, team building, problem-solving, and decision-making. Completed coursework and assessments covering topics such as organizational culture, leadership styles, and strategic planning. Demonstrated proficiency in applying management theories and techniques to real-world scenarios. Achieved a high level of competence in effectively leading teams and driving organizational success.</p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
        <div>
        <a src="">
        <h3 className="skills">Donwload full CV</h3>
        </a>
        </div>

        </div>
    )
}

export default Experience;