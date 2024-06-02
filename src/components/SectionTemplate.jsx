import React from 'react';
import Section from './Section';
import Frame2 from '../assets/Frame 2.svg';
import Notification from '../assets/Notification.svg';
import Star1 from '../assets/Star.svg';
import Star from '../assets/Star 8.svg';

const SectionTemplate = () => {

    const data1 = {
        tag: "Advantages",
        heading: "Why Choose Uifry?",
        icon: Notification,
        smallHeading: "Clever Notifications",
        description: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
    };

    const data2 = {
        tag: "",
        heading: "",
        icon: Star1,
        smallHeading: "Fully Customizable",
        description: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
    };

    return (
        <div className='max-w-[1700px] w-11/12 relative mx-auto py-5'>
            <Section data={data1} image={Frame2} reverse={false}></Section>
            <div className='absolute w-12 left-[50%]'>
                <img src={Star} alt="" />
            </div>
            <Section data={data2} image={Frame2} reverse={true}></Section>
            <div className='absolute max-[1100px]:top-[75%] right-[10%] top-[90%]'>
                <img src={Star} alt="" />
            </div>
        </div>
    );
};

export default SectionTemplate;