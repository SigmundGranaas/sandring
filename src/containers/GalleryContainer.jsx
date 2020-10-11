import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getImages} from '../store/actions/imageActions'
import Gallery from '../components/Gallery/Gallery'



 class GalleryContainer extends Component {
    componentDidMount(){
        this.props.getImages();
    }


    render() {
        const {images} = this.props.images;
        
        return (
            <div>
              <Gallery images={images}/>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({images:state.images})

export default connect(mapStateToProps, {getImages})(GalleryContainer)