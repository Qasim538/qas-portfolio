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
            date="2004 - 2007" iconStyle={{background: "#e9d35b", color: "#ffffff"}} icon={<BadgeIcon />}
            > <h3 className="vertical-timeline-element-title"> Hogarth London</h3> 
            <p>Graphics Production Artist</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            
            className="vertical-timeline-element--education"
            date="2004 - 2007" iconStyle={{background: "#3e497a", color: "#ffffff"}} icon={<SchoolIcon />}
            > <h3 className="vertical-timeline-element-title"> Allama IQbal University</h3> 
            <p>Bachelor's Degree</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            
            className="vertical-timeline-element--education"
            date="2004 - 2007" iconStyle={{background: "#3e497a", color: "#ffffff"}} icon={<SchoolIcon />}
            > <h3 className="vertical-timeline-element-title"> Allama IQbal University</h3> 
            <p>Bachelor Degree</p>

            </VerticalTimelineElement>
            
        </VerticalTimeline>

        </div>
    )
}

export default Experience;