import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

import Image from './Image';
import { GradientSection, BackgroundImageSection } from './Section';
import Title from './Title';
import Paragraph from './Paragraph';
import { HorizontalRule } from './HorizontalRule';
import Input from './Input';
import { SubmitButton } from './Button';
import translate from 'google-translate-open-api';

const App = (props) => {
    const ref = useRef();

    const onWheel = (e) => {
        const largeContainerScrollPosition = ref.current.scrollLeft;
        ref.current.scrollTo({
            top: 0,
            left: largeContainerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    }




    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');

    const onChange = (e) => {
        if(e.target.name === 'fname') setFName(e.target.value)
        if(e.target.name === 'sname') setSName(e.target.value);
    }


    const [display, setDisplay] = useState(false); //true if user submits data
    const [result, setResult] = useState('');
    const [percentage, setPercentage] = useState('');

    const onClick = e => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fName}&sname=${sName}`, {
                    headers: {
                        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                        "x-rapidapi-key": "d83213ceffmsh37fc2630511e6ccp1bbd3cjsn925db9e172f5"
                    }
                });
                
                setPercentage(response.data.percentage);
                setResult(response.data.result);
            }catch(err){
                console.error(err);
            }finally{
                setDisplay(true);
            }
        }
        fetchData();
    }



    return (
        <div className="App" onWheel={onWheel} ref={ref}>
            <Image
                src = '/love1.jpg'
                alt = ''
                width = '300px'
                height = '100%'
            />

            <GradientSection width='600px' background='yellow-orange'>
                <Title
                    textTransform = 'capitalize'
                    textShadow = '-1.5px 0px #666666'
                    color = 'whitesmoke'
                    fontSize = '38px'
                >
                    ¿Quieres saber tu porcentaje de afinidad con tu pareja?
                </Title>
                <HorizontalRule 
                    color = 'white' 
                    margin = '10px 0'
                    borderSize = '2px'
                />
                <Paragraph color='white'>
                    Introduce tu nombre y el de tu pareja a continuación para saber si es tu
                    pareja ideal
                </Paragraph>
            </GradientSection>

            <BackgroundImageSection
                width = '800px'
                backgroundUrl = '/love5.jpg'
                align = 'flex-end'
            >
                <Title
                    textTransform = 'capitalize'
                    textShadow = '-1.5px 0px #ffffff'
                    color = '#262626'
                    fontSize = '32px'
                >
                    Si estás rayado por el amor...
                </Title>
                <Paragraph color='#666666'>
                    ...consigue la confianza que necesitas con una buena afinidad.
                </Paragraph>
                <div style={{ minHeight: '300px' }}></div>
            </BackgroundImageSection>

            <BackgroundImageSection
                width = '500px'
                backgroundUrl = '/love2.jpg'
                align = 'center'
            >
                <div style={{
                    height: '70%',
                    width: '70%',
                    backgroundColor: 'rgba(255, 255, 255, .8)',
                    borderRadius: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {(!display)
                        ? <>   
                            <Input type='text' name='fname' value={fName} onChange={onChange} />
                            <Input type='text' name='sname' value={sName} onChange={onChange} />
                            <SubmitButton onClick={onClick}>Comprobar Afinidad</SubmitButton>
                        </>
                        : <>  
                            <Paragraph color='#666666'>{result}</Paragraph>
                            <Paragraph color='#262626' fontSize='48px'>{percentage}</Paragraph>
                            <SubmitButton onClick={() => setDisplay(false)}>Volver a intentarlo</SubmitButton>
                        </>
                    }
                </div>
            </BackgroundImageSection>

            <Image
                src = '/love4.jpg'
                alt = ''
                width = '300px'
                height = '100%'
            />

            <div style={{ minWidth: '15vw' }}></div>
        </div>
    );
}

export default App;