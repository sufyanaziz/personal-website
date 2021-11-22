import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaLink } from 'react-icons/fa';
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

const useIcon = (code) => {
  switch (code) {
    case 'html': {
      return AiFillHtml5;
    }
    case 'css': {
      return FaCss3Alt;
    }
    case 'scss': {
      return SiSass;
    }
    case 'js': {
      return SiJavascript;
    }
    case 'ts': {
      return SiTypescript;
    }
    case 'react.js': {
      return FaReact;
    }
    case 'node.js': {
      return FaNodeJs;
    }
    case 'mysql': {
      return GrMysql;
    }
    case 'git': {
      return FaGitAlt;
    }
    case 'vscode': {
      return SiVisualstudiocode;
    }
    case 'github': {
      return AiFillGithub;
    }
    case 'website': {
      return FaLink;
    }
    default:
      return null;
  }
};

export default useIcon;
