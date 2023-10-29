
import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #20b2aa;
  border-radius: 2px;
  transition: background-color 0.3s, border-color 0.3s;
  background-color: #fff;
  /* Hide the checkbox visually */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:checked {
    background-color: #20b2aa;
    background-color: #20b2aa;
  }

  &:after {
    content: '✓'; /* Unicode character for a checkmark */
    display: block;
    position: absolute;
    top: 50%; /* Vertically center the checkmark */
    left: 50%; /* Horizontally center the checkmark */
    transform: translate(-50%, -50%); /* Center the checkmark */
    font-size: 16px;
    color: #fff; /* Change the color of the checkmark */
  }

  &:checked:after {
    opacity: 1;
  }
`;

const CheckLabel = styled.label`

  display: flex;
  align-items: center;
  justify-content:left;
  width:441px;
  margin-bottom: 8px;
  font-size:12px;

  @media (max-width: 768px) {
  
    height:15px;
    width:260px;
    
  }

  @media (min-width: 800px) {
    width:250px;
  }
  @media (min-width: 1000px) {
   
    width:441px;
  }


`
const ChangePass = styled(CheckLabel)`
justify-content:right;
align-item:center;
height:28px;
color:gray;
@media (min-width: 800px) {
padding-top:2px;
}
@media (min-width: 1000px) {
 padding-top:2px;
}

`


const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return `
          background-color: black;
          color: white;
          display:flex;
        
        
          ${Input}:checked + && {
            color: gray;
            background-color: #20b2aa;
          }
        `;
      default:
        return `
          background-color: white;
          display:flex;
          width:160px;
          margin-left:30px;
         
       
          color:  gray;
          ${Input}:checked + && {
            color:  #20b2aa;
            background-color: #20b2aa;
          }
        


        `;
    }
  }}
`;

const GoogleSignIn = styled.a`
color:gray;
border:2px solid #20b2aa;
margin-top:10px;
padding:10px;
border-radius:4px;

@media (max-width: 768px) {
  width:150px;
  margin-top:5px;
  padding:5px;
}




`



const Section = styled.section`
display: flex;
justify-content:center;
align-items:center;
height:705px;
@media (max-width: 768px) {
  flex-direction: column;
  width:100%;
  
}



`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #20b2aa;
`;

const Input = styled.input.attrs({ $size: '1em' })`
  color: #BF4F74;
  font-size: 1em;
  border: 2px solid  #20b2aa;
  border-radius: 3px;
  width:400px;
  margin: ${props => props.$size};
  padding: ${props => props.$size};
  
  @media (max-width: 768px) {
    flex-direction: column;
    height:15px;
    width:200px;
  }
  @media (min-width: 800px) {
    flex-direction: column;
    height:15px;
    width:200px;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    height:15px;
    width:400px;
  }

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  max-width: 800px;
  padding-bottom:40px;
  border-radius:10px;
  margin: 0 auto;
  border:4px solid #20b2aa;

  @media (max-width: 768px) {
  width:400px;
  height:450px;

  
}
  @media (min-width: 800px) {
  width:350px;
  height:450px;

  
}
  @media (min-width: 1000px) {
  width:550px;
 

  
}





`;
const Label = styled.label`
  margin-bottom: 5px;
  text-align:left;
  margin-left:13px;
  padding-left:4px;
  width:451px;
  @media (max-width: 768px) {
    
    height:15px;
    width:250px;
  }
  @media (min-width: 800px) {
    
    height:15px;
    width:250px;
  }
  @media (min-width: 1000px) {
    width:451px;
    height:15px;
   
  }


`;

const LoginButton = styled.button`
background-color: #20b2aa;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  width:150px;
  margin-top:30px;
`;


const StyledImage = styled.img`

width:750px;
height:100%;
@media (min-width: 800px) {

  max-width: 400px; 
  height: auto;
}
@media (min-width: 1000px) {

  max-width: 750px; 
  height: auto;
}

@media (max-width: 768px) {
  flex-direction: column;
  height:300px;
  width:250px;
  display:none;
}



`


export { Input, Form, Label, LoginButton, Section, Title, Checkbox, CheckLabel, LabelText, ChangePass, StyledImage, GoogleSignIn };
