import React, { Component } from "react";
import { Card, CardText, CardMedia } from 'material-ui';
import { NavLink } from 'react-router-dom'
import './style.css'

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const categories = [
    {   key: 0,
        title: "All",
        link: '/portfolio/all',
        thumb: '../../assets/paintings-thumbnails/thumbnail-1.jpg' },
    {   key: 1,
        title: "Modern",
        link: '/portfolio/modern',
        thumb: '../../assets/paintings-thumbnails/thumbnail-2.jpg' },
    {   key: 2,
        title: "Landscape",
        link: '/portfolio/landscape',
        thumb: '../../assets/paintings-thumbnails/thumbnail-3.jpg' },
    {   key: 3,
        title: "Portriat",
        link: '/portfolio/portriat',
        thumb: '../../assets/paintings-thumbnails/thumbnail-4.jpg' },
]

class Grid extends Component {
    renderGridItems(data) {
        return categories.map((item) => (
            <NavLink key={item.key} className='cardItemContainer' to={item.link}>
                <div className='cardItemContainerHover'></div>
                <h1>{item.title}</h1>
            </NavLink>
        ));
    }

    render() {
        return (
            <div>
                <ResponsiveReactGridLayout {...this.props} layouts={this.props.layouts}>
                    {this.renderGridItems(this.props.layout)}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default Grid;