import React from 'react'
import AboutUs from '../components/AboutUs'
import MemberInfo from '../components/MemberInfo'
import '../assets/css/About.css'
import NguyenAvt from '../assets/img/Nguyen.jpg'
import PhongAvt from '../assets/img/Phong.jpg'
import VanAvt from '../assets/img/Van.jpg'
import NhatAvt from '../assets/img/Nhat.jpg'
import SonAvt from '../assets/img/Son.png'

function About () {
    return (
        <div id='about'>
            <AboutUs/>            
            <div id='member'>
                <MemberInfo memberAvatar={NguyenAvt} memberName='Nguyễn Lê Nguyên' memberId='1751016' memberPosition='Leader'/>
                <MemberInfo memberAvatar={PhongAvt} memberName='Nguyễn Ngọc Phong' memberId='1751093' memberPosition='Trash'/>              
                <MemberInfo memberAvatar={VanAvt} memberName='Lương Thế Văn' memberId='1751122' memberPosition='Trash'/>
                <div class="break"></div>
                <MemberInfo memberAvatar={NhatAvt} memberName='Nguyễn Minh Nhật' memberId='1751090' memberPosition='Trash'/>
                <MemberInfo memberAvatar={SonAvt} memberName='Nguyễn Hải Sơn' memberId='1751100' memberPosition='Trash'/> 
            </div>
        </div>
    )
}

export default About