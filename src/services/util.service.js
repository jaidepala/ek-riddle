import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySweetAlert = withReactContent(Swal);

const util = {


    shareDialog: (shareConfig) => {
        /* 
            !   REF
            *   
            *   https://css-tricks.com/how-to-use-the-web-share-api/
            *   
        */

        if (navigator.share) {
            // Web Share API is supported
            
            navigator.share(shareConfig)
            .then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(console.error);

        } else {
            // Fallback

            let { text, url } = shareConfig.dialog;

            MySweetAlert.fire({
                title: '<strong>Share 7 Candles Riddle</strong>',
                icon: 'info',
                html:
                    '<div class="share-dialog is-open">' +
                    '<div class="share-header"> <h3 class="dialog-title"> Share This Riddle </h3> <button class="close-button"><svg><use href="#close"></use></svg></button> </div>' +
                    '<div class="targets">' +
                    '<a class="share-dialog-button" href="https://www.facebook.com/sharer/sharer.php?u=' + url +'" target="_blank"> <svg> <use></use><span>Facebook</span></a >' +
                    '<a class="share-dialog-button" href="https://twitter.com/share?url=' + url + '&text=' + text +'&via=@jaidepala" target="_blank"> <svg> <use></use> <span>Twitter</span> </a>' +
                    '<a class="share-dialog-button" href="https://www.linkedin.com/shareArticle?url=' + url + '&title=' + text +'" target="_blank"> <svg> <use></use> <span>LinkedIn</span> </a>' +
                    '<a class="share-dialog-button" href="mailto:?subject=Checkout My Score&body='+ text + '\n\n' + url +'title="Share by Email" target="_blank"> <svg> <use></use> <span>Email</span> </a>' +
                    '</div>' +
                    '</div>',
                showCloseButton: true,
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonText: 'Close'
            })
        }
    }
};

export default util;