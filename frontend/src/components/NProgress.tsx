import NProgress from 'nprogress';
import Router from 'next/router'


export default function createLoaderBetweenPages() {

    NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
}
