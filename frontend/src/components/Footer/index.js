import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { AiFillGoogleCircle} from "react-icons/ai";
import './style.css';


export default function Footer() {
	return (
<footer class="footer" id="footer">
	<div className='text'>
		<div className='icon'>
		<AiFillInstagram className='icon-1' />
		<AiFillFacebook  className='icon-1' />
		<AiFillGoogleCircle className='icon-1' />
		</div>
      <div>
			Wszelkie prawa zastrzeżone  2023 &copy;
			</div>
	</div>
</footer>
	)
}