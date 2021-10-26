import React from 'react';
import '../footer/footer.css'

function Contact() {
    return (
        <div className="display centered">
            <div id="social-icons" className="socialMain">
                <ul class="social">
                    <li><a id="social-icons" className="slink social-icons" href="https://www.instagram.com/stevefromspace/"><i className="grow fa fa-instagram" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons" className="slink" href="https://www.facebook.com/Steve-Fokas-100492391788474/"><i className="grow fa fa-facebook" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons" className="slink" href="https://twitter.com/stevefromspace"> <i className="grow fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a id="social-icons" className="slink" href="https://soundcloud.com/stevefromspace"><i className="grow fa fa-soundcloud" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons" className="slink" href="https://open.spotify.com/artist/2unluylwecjrT2yT5Q8rfB"><i className="grow fa fa-spotify" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons" className="slink" href="https://music.apple.com/us/artist/steve-fokas/658109679"><i className="grow fa fa-apple" aria-hidden="true"></i> </a></li>
                </ul>
                <script src="script.js"></script>
            </div>
        </div>
    );
}

export default Contact;