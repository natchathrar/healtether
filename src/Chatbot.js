import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const steps = [
    {
        id: 'intro',
        message: 'Hello! What is your name?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        trigger: 'greeting',
    },
    {
        id: 'greeting',
        message: 'Hi {previousValue}, how can I assist you today? Please let me know the issues you are facing.',
        trigger: 'userIssues',
    },
    {
        id: 'userIssues',
        user: true,
        trigger: 'age',
        waitAction: true,
    },
    {
        id: 'age',
        message: 'Thank you for sharing your issues. Could you please provide your age?',
        trigger: 'waitUserAge',
    },
    {
        id: 'waitUserAge',
        user: true,
        trigger: 'contactDetails',
        waitAction: true,
    },
    {
        id: 'contactDetails',
        message: 'Please provide your contact details (phone number or email) so that we can reach out to you.',
        trigger: 'waitUserContactDetails',
    },
    {
        id: 'waitUserContactDetails',
        user: true,
        trigger: 'doctor',
        waitAction: true,
    },
    {
        id: 'doctor',
        message: 'Are you currently seeing any specific doctor? If yes, please provide the doctor\'s name.',
        trigger: 'waitUserDoctor',
    },
    {
        id: 'waitUserDoctor',
        user: true,
        trigger: 'doctorConfirmation',
        waitAction: true,
    },
    {
        id: 'doctorConfirmation',
        message: 'Thank you for providing all the information. We will assist you accordingly. If you have any other questions, feel free to ask!',
        end: true,
    },
];

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#4D63DD',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#4D63DD',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const CustomChatBot = () => {
    const [answeredSteps, setAnsweredSteps] = useState([]);

    const handleStepTriggered = (step) => {
        if (!answeredSteps.includes(step.id)) {
            setAnsweredSteps((prevAnsweredSteps) => [...prevAnsweredSteps, step.id]);
        }
    };

    const customRenderStep = (step, stepIndex, steps) => {
        if (!answeredSteps.includes(step.id)) {
            return <ChatBot.DefaultStep {...step} />;
        }

        const nextUnansweredStep = steps.find((s, index) => index > stepIndex && !answeredSteps.includes(s.id));

        if (nextUnansweredStep) {
            return customRenderStep(nextUnansweredStep, stepIndex + 1, steps);
        }

        return null;
    };

    return (
        <ChatBot
            steps={steps}
            renderStep={customRenderStep}
            handleEnd={() => setAnsweredSteps([])}
            handleStepTriggered={handleStepTriggered} // Updated event handler to handleStepTriggered
            {...theme}
        />
    );
};

const ChatbotComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px', marginRight: '20px' }}>
            <ThemeProvider theme={theme}>
                <CustomChatBot />
            </ThemeProvider>
        </div>
    );
};

export default ChatbotComponent;

// import React from 'react';
// import ChatBot from 'react-simple-chatbot';

// const steps = [
//     {
//         id: '1',
//         message: 'Hello! How can I assist you today?',
//         trigger: '2',
//     },
//     {
//         id: '2',
//         user: true,
//         trigger: '3',
//     },
//     {
//         id: '3',
//         message: 'Great! Your message is: {previousValue}. We will get back to you shortly.',
//         end: true,
//     },
// ];

// const theme = {
//     background: '#f5f8fb',
//     fontFamily: 'Arial, sans-serif',
//     headerBgColor: '#4D63DD',
//     headerFontColor: '#fff',
//     headerFontSize: '20px',
//     botBubbleColor: '#4D63DD',
//     botFontColor: '#fff',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a',
// };

// const ChatbotComponent = () => {
//     return (
//         <ChatBot
//             steps={steps}
//             {...theme}
//         />
//     );
// };

// export default ChatbotComponent;
