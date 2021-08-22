import React, {Component} from 'react';
import Photo from './Photo';
import Contact from './Contact';
import locationIcon from '../assets/placeholder.png';
import phoneIcon from '../assets/phone-call.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from "../assets/github-logo-silhouette-in-a-square.png";
import emailIcon from '../assets/email.png';


class BasicInfo extends Component {
    render(){

        return (
          <div className="border-b-2 h-1/4 flex items-center space-x-10">
            <Photo />
            <div className="flex flex-col space-y-4 w-2/3">
              <input
                type="text"
                placeholder="Name"
                className="h-12 text-3xl p-2 rounded-sm bg-transparent focus:bg-gray-50"
              />
              <textarea
                placeholder="Small Bio"
                className="h-28 text-xl p-2 rounded-sm bg-transparent focus:bg-gray-50"
              />
            </div>
            <div>
              <Contact icon={locationIcon} holder="Location" />
              <Contact icon={phoneIcon} holder="Phone" />
              <Contact icon={linkedinIcon} holder="Linkedin" />
              <Contact icon={githubIcon} holder="Github" />
              <Contact icon={emailIcon} holder="Email" />
            </div>
          </div>
        );
    }
}

export default BasicInfo;