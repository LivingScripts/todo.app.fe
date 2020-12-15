import React from 'react';
import './card.styles.scss';
import { IconButton } from '../button/';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-header p-2">
                <div className="push-away mb-1">
                    <span className="id">000001</span>
                    <IconButton variant="icon-only" size="small" icon="|>"></IconButton>
                </div>
                <span className="title">my first Task</span>
            </div>
            <p className="description m-2 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa sequi ratione error, asperiores necessitatibus mollitia repellendus ex nulla eius qui dolorum! Quia maiores fugit delectus, optio deserunt quasi earum distinctio totam sequi error obcaecati voluptatem temporibus, porro molestias neque ab! Reiciendis, enim ullam, tempore suscipit consequatur distinctio voluptates dolorem praesentium facilis labore, iure sapiente eveniet? Non veritatis culpa, dolore repellat eaque, porro aliquid possimus odio blanditiis saepe molestiae repudiandae in aliquam vel praesentium ipsum at doloremque officia placeat unde repellendus enim ex nulla. Facilis cumque, nam mollitia dolore repudiandae necessitatibus voluptate, alias laborum animi pariatur quia sapiente esse similique.</p>
            <div className="progress-bar-container pl-4 pr-4">
                <div></div>
            </div>
            <div className="controls p-2 push-away">
                <div className="control">
                    <IconButton variant="icon-only" size="small" icon="@"></IconButton>
                    <span className="count">0</span>
                </div>
                <div className="control">
                    <IconButton variant="icon-only" size="small" icon="@"></IconButton>
                    <span className="count">0</span>
                </div>
                <div className="control">
                    <IconButton variant="icon-only" size="small" icon="@"></IconButton>
                    <span className="count">0</span>
                </div>
                <div className="control">
                    <IconButton variant="icon-only" size="small" icon="@"></IconButton>
                    <span className="count">0</span>
                </div>
            </div>
        </div>
    );
}