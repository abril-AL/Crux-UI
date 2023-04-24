import { Countdown } from './components/Countdown';
import { useState } from 'react';
import { PostTrial } from './PostTrial';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import cardI from './fonts/break_img.png';

import f1 from './const_faces/CF (1).png';
import f2 from './const_faces/CF (2).png';
import f3 from './const_faces/CF (3).png';
import f4 from './const_faces/CF (4).png';
import f5 from './const_faces/CF (5).png';
import f6 from './const_faces/CF (6).png';
import f7 from './const_faces/CF (7).png';
import f8 from './const_faces/CF (8).png';
import f9 from './const_faces/CF (9).png';
import f10 from './const_faces/CF (10).png';

import m1 from './const_faces/CM (1).png';
import m2 from './const_faces/CM (2).png';
import m3 from './const_faces/CM (3).png';
import m4 from './const_faces/CM (4).png';
import m5 from './const_faces/CM (5).png';
import m6 from './const_faces/CM (6).png';
import m7 from './const_faces/CM (7).png';
import m8 from './const_faces/CM (8).png';
import m9 from './const_faces/CM (9).png';
import m10 from './const_faces/CM (10).png';

export var Fimages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
export var Mimages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
export var Bimages = [f1, f2, f3, f4, f5, m6, m7, m8, m9, m10];

export function ConstPics(user) {
    const [randOrder, setNums] = useState(get_rand_order());
    function get_rand_order() {
        var arr = [];//array of 10 ints (0-9)
        while (arr.length < 10) {
            var r = Math.floor(Math.random() * 10);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        return arr;
    }
    const SO = user['user'][2]
    const [imgSet, setImgSet] = useState(get_pref_ten(SO));
    const [i, seti] = useState(0);
    const [b, setb] = useState(false)
    const BTIME = 3000;//Break time length (ms)
    const IMGTIME = 3000;//Image presenting time (ms)
    function get_pref_ten(so) {
        if (so != '') {
            if (so === "Heterosexual (female)" || so === "Homosexual (male)")
                return Mimages;
            if (so === "Heterosexual (male)" || so === "Homosexual (female)")
                return Fimages;
            if (so === "Bisexual/pansexual" || so === "Asexual/other")
                return Bimages;
        }
        else {
            console.log('error with pref prop');
            return null;
        }
    }

    if (b) {
        if (i == 10) { //last break = end trial
            const ret = [imgSet, randOrder];
            return (
                <>
                    <PostTrial user={user} imgSet={ret}></PostTrial>
                </>);
        }
        return (
            <>
                <span id="content1"></span>
                <div className='hideThis'>
                    <Countdown tgt={BTIME} event={() => setb(false)}></Countdown>
                </div>
                <span id="content1"></span>
                <span id="content1"></span>
                <span id="content1"></span>
                <span id="content1"></span>
                <span id="content1"></span> { /* this is just spacing stuff */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text className='centerCardText'>
                            The next image will be presented shortly
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
    else {
        return (
            <div>
                <div className='hideThis'>
                    <Countdown width={368} tgt={IMGTIME} event={() => { seti(i + 1); setb(true); }} ></Countdown>
                </div>
                <div>
                    <Image height={400} src={imgSet[randOrder[i]]}  ></Image>
                </div>
            </div>
        );
    }
}