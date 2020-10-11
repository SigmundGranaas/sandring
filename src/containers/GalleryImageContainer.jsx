import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getImage} from '../store/actions/imageActions'
import GalleryImage from '../components/Gallery/GalleryImage'



 class GalleryImageContainer extends Component {
    componentDidMount(){
        this.props.getImage(this.props.match.params.id);
    }


    render() {
        const {image} = this.props.image;
        console.log(image);
        
        return (
            <div>
              <GalleryImage image={image}/>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({image:state.image})

export default connect(mapStateToProps, {getImage})(GalleryImageContainer)