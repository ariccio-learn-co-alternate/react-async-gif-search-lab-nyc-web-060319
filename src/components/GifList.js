import React from 'react';


class GifList extends React.Component {

    urls() {
        if (this.props.gifs != null) {
            const gifs = this.props.gifs.data;
            console.log(gifs);
            const urls = gifs.map(img => {
                return img.images.original.url;
            })
            // console.log(urls);
            return urls;
        }
        return null;
    }

    listElements(imageURLs) {
        if (imageURLs != null) {
            return imageURLs.map(url => {
                return <li><img src={url}/></li>
            })
        }
        return null;
    }

    render() {
        const images = this.urls();
        return (
            <ul>
                {this.listElements(images)}
            </ul>
        );
    }
}
export default GifList;