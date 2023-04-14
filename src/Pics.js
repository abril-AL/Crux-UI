import { Countdown } from './components/Countdown';
import { useState } from 'react';

import f1 from './faces/female/F (1).jpg'
import f2 from './faces/female/F (2).jpg'
import f3 from './faces/female/F (3).jpg'
import f4 from './faces/female/F (4).jpg'
import f5 from './faces/female/F (5).jpg'
import f6 from './faces/female/F (6).jpg'
import f7 from './faces/female/F (7).jpg'
import f8 from './faces/female/F (8).jpg'
import f9 from './faces/female/F (9).jpg'
import f10 from './faces/female/F (10).jpg'
import f11 from './faces/female/F (11).jpg'
import f12 from './faces/female/F (12).jpg'
import f13 from './faces/female/F (13).jpg'
import f14 from './faces/female/F (14).jpg'
import f15 from './faces/female/F (15).jpg'
import f16 from './faces/female/F (16).jpg'
import f17 from './faces/female/F (17).jpg'
import f18 from './faces/female/F (18).jpg'
import f19 from './faces/female/F (19).jpg'
import f20 from './faces/female/F (20).jpg'
import f21 from './faces/female/F (21).jpg'
import f22 from './faces/female/F (22).jpg'
import f23 from './faces/female/F (23).jpg'
import f24 from './faces/female/F (24).jpg'
import f25 from './faces/female/F (25).jpg'
import f26 from './faces/female/F (26).jpg'
import f27 from './faces/female/F (27).jpg'
import f28 from './faces/female/F (28).jpg'
import f29 from './faces/female/F (29).jpg'
import f30 from './faces/female/F (30).jpg'
import f31 from './faces/female/F (31).jpg'
import f32 from './faces/female/F (32).jpg'
import f33 from './faces/female/F (33).jpg'
import f34 from './faces/female/F (34).jpg'
import f35 from './faces/female/F (35).jpg'
import f36 from './faces/female/F (36).jpg'
import f37 from './faces/female/F (37).jpg'
import f38 from './faces/female/F (38).jpg'
import f39 from './faces/female/F (39).jpg'
import f40 from './faces/female/F (40).jpg'
import f41 from './faces/female/F (41).jpg'
import f42 from './faces/female/F (42).jpg'
import f43 from './faces/female/F (43).jpg'
import f44 from './faces/female/F (44).jpg'
import f45 from './faces/female/F (45).jpg'
import f46 from './faces/female/F (46).jpg'
import f47 from './faces/female/F (47).jpg'
import f48 from './faces/female/F (48).jpg'
import f49 from './faces/female/F (49).jpg'
import f50 from './faces/female/F (50).jpg'
import f51 from './faces/female/F (51).jpg'

var images = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
    f11, f12, f13, f14, f15, f16, f17, f18, f19, f20,
    f21, f22, f23, f24, f25, f26, f27, f28, f29, f30,
    f31, f32, f33, f34, f35, f36, f37, f38, f39, f40,
    f41, f42, f43, f44, f45, f46, f47, f48, f49, f50, f51];//doesnt scale well, but oh well


function Pics() {

    const [currentImage, setCurrentImage] = useState(f1);
    const [i, seti] = useState(0);
    const [next, setN] = useState(true);
    const [b, setb] = useState(false)
    if (b) {
        return (
            <>
                <text>ON BREAK</text>
                <Countdown tgt={5000} event={() => setb(false)}></Countdown>
            </>
        )
    }
    else {
        return (
            <div>
                <button onClick={() => { setCurrentImage(images[i + 1]); seti(i + 1) }}>{'->'}</button>
                <div>
                    <img src={currentImage} width="468" height="400" />
                </div>
                <Countdown tgt={5000} event={() => { setCurrentImage(images[i + 1]); seti(i + 1); setb(true); console.log(next) }} ></Countdown>
            </div>
        );
    }
}

export { Pics };