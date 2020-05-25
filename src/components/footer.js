import React from "react";

import { RiddleSkewedBackground, RiddleFooter, RiddleFooterCredits, RiddleFooterLink } from '../styles/footer.styles';

const Footer = () => {

    return (
        <>
            {/* <RiddleSkewedBackground></RiddleSkewedBackground> */}
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
