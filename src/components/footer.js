import React from "react";

import { RiddleFooter, RiddleFooterCredits, RiddleFooterLink } from '../styles/footer.styles';

const Footer = () => {

    return (
        <>
            <RiddleFooter>
                <RiddleFooterCredits>
                        by Jay Depala <br />
                        <RiddleFooterLink href="https://instagram.com/jaidepala">
                            @jaidepala
                        </RiddleFooterLink>
                </RiddleFooterCredits>   
            </RiddleFooter>
        </>
    );
};

export default Footer;
