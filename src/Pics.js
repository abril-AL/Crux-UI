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
import f52 from './faces/female/F (52).jpg'
import f53 from './faces/female/F (53).jpg'
import f54 from './faces/female/F (54).jpg'
import f55 from './faces/female/F (55).jpg'
import f56 from './faces/female/F (56).jpg'
import f57 from './faces/female/F (57).jpg'
import f58 from './faces/female/F (58).jpg'
import f59 from './faces/female/F (59).jpg'
import f60 from './faces/female/F (60).jpg'
import f61 from './faces/female/F (61).jpg'
import f62 from './faces/female/F (62).jpg'
import f63 from './faces/female/F (63).jpg'
import f64 from './faces/female/F (64).jpg'
import f65 from './faces/female/F (65).jpg'
import f66 from './faces/female/F (66).jpg'
import f67 from './faces/female/F (67).jpg'
import f68 from './faces/female/F (68).jpg'
import f69 from './faces/female/F (69).jpg'
import f70 from './faces/female/F (70).jpg'
import f71 from './faces/female/F (71).jpg'
import f72 from './faces/female/F (72).jpg'
import f73 from './faces/female/F (73).jpg'
import f74 from './faces/female/F (74).jpg'
import f75 from './faces/female/F (75).jpg'
import f76 from './faces/female/F (76).jpg'
import f77 from './faces/female/F (77).jpg'
import f78 from './faces/female/F (78).jpg'
import f79 from './faces/female/F (79).jpg'
import f80 from './faces/female/F (80).jpg'
import m1 from './faces/male/M (1).jpg'
import m2 from './faces/male/M (2).jpg'
import m3 from './faces/male/M (3).jpg'
import m4 from './faces/male/M (4).jpg'
import m5 from './faces/male/M (5).jpg'
import m6 from './faces/male/M (6).jpg'
import m7 from './faces/male/M (7).jpg'
import m8 from './faces/male/M (8).jpg'
import m9 from './faces/male/M (9).jpg'
import m10 from './faces/male/M (10).jpg'
import m11 from './faces/male/M (11).jpg'
import m12 from './faces/male/M (12).jpg'
import m13 from './faces/male/M (13).jpg'
import m14 from './faces/male/M (14).jpg'
import m15 from './faces/male/M (15).jpg'
import m16 from './faces/male/M (16).jpg'
import m17 from './faces/male/M (17).jpg'
import m18 from './faces/male/M (18).jpg'
import m19 from './faces/male/M (19).jpg'
import m20 from './faces/male/M (20).jpg'
import m21 from './faces/male/M (21).jpg'
import m22 from './faces/male/M (22).jpg'
import m23 from './faces/male/M (23).jpg'
import m24 from './faces/male/M (24).jpg'
import m25 from './faces/male/M (25).jpg'
import m26 from './faces/male/M (26).jpg'
import m27 from './faces/male/M (27).jpg'
import m28 from './faces/male/M (28).jpg'
import m29 from './faces/male/M (29).jpg'
import m30 from './faces/male/M (30).jpg'
import m31 from './faces/male/M (31).jpg'
import m32 from './faces/male/M (32).jpg'
import m33 from './faces/male/M (33).jpg'
import m34 from './faces/male/M (34).jpg'
import m35 from './faces/male/M (35).jpg'
import m36 from './faces/male/M (36).jpg'
import m37 from './faces/male/M (37).jpg'
import m38 from './faces/male/M (38).jpg'
import m39 from './faces/male/M (39).jpg'
import m40 from './faces/male/M (40).jpg'
import m41 from './faces/male/M (41).jpg'
import m42 from './faces/male/M (42).jpg'
import m43 from './faces/male/M (43).jpg'
import m44 from './faces/male/M (44).jpg'


// f = 0-50  m 51-77 (?)
var images = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
    f11, f12, f13, f14, f15, f16, f17, f18, f19, f20,
    f21, f22, f23, f24, f25, f26, f27, f28, f29, f30,
    f31, f32, f33, f34, f35, f36, f37, f38, f39, f40,
    f41, f42, f43, f44, f45, f46, f47, f48, f49, f50,
    f51, f52, f53, f54, f55, f56, f57, f58, f59, f60,
    f61, f62, f63, f64, f65, f66, f67, f68, f69, f70,
    f71, f72, f73, f74, f75, f76, f77, f78, f79, f80,

    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
    m11, m12, m13, m14, m15, m16, m17, m18, m19, m20,
    m21, m22, m23, m24, m25, m26, m27, m28, m29, m30,
    m31, m32, m33, m34, m35, m36, m37, m38, m39, m40,
    m41, m42, m43];//doesnt scale well, but oh well


function Pics(prefer) {
    console.log(prefer['prefer'][1]);
    const prefRange = get_pref_imgs(prefer['prefer'][1]);
    const prefImgs = images.slice(prefRange['l'], prefRange['h'] + 1);
    const [currentImage, setCurrentImage] = useState(prefImgs[0]);
    const [i, seti] = useState(0);
    const [b, setb] = useState(false)
    if (b) {
        return (
            <>
                <text>Break</text>
                <Countdown tgt={5000} event={() => setb(false)}></Countdown>
            </>
        )
    }
    else {
        return (
            <div>
                <button onClick={() => { setCurrentImage(prefImgs[i + 1]); seti(i + 1) }}>{'->'}</button>
                <div>
                    <img src={currentImage} width="368" height="300" />
                </div>
                <Countdown tgt={5000} event={() => { setCurrentImage(prefImgs[i + 1]); seti(i + 1); setb(true); }} ></Countdown>
            </div>
        );
    }
}

function get_pref_imgs(so) {
    console.log(so);
    const MID = 80;
    const MAX = 123;
    if (so != '') {
        if (so === "Heterosexual (female)" || so === "Homosexual (male)")
            return { 'l': MID, 'h': MAX };
        if (so === "Heterosexual (male)" || so === "Homosexual (female)")
            return { 'l': 0, 'h': MID - 1 };
        if (so === "Bisexual/pansexual" || so === "Asexual/other")
            return { 'l': 0, 'h': MAX };
    }
    else {
        console.log('error with pref prop');
        return null;
    }
}


export { Pics };