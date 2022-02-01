import Image from "next/image";
import logo from "../assets/logo.svg";
import React from "react";
import {Container, Row} from "react-bootstrap";

const Post = () => {
    return(
        <>
            <div className="position-relative overflow-hidden p-0 mb-md-3 text-center bg-icl">
                <div className="col-md-5 p-lg-5 mx-auto my-5 bg-header">
                    <Image className={'shadow-lg'} src={logo}  alt={'logo: jn in square at 90 degrees'}/>
                    <h1 className="text-light">post.title</h1>
                </div>
            </div>
            <Container className={'col-lg-6'}>
                <Row>
                    <p>
                        <h2>Lorem Ipsum</h2> Dolor sit amet, consectetur adipiscing elit. Nunc orci sapien, elementum et nulla non, feugiat semper nunc. Sed accumsan venenatis nisl eu euismod. Quisque aliquam interdum enim, in imperdiet arcu sollicitudin quis. Quisque consectetur consectetur suscipit. Morbi ac rutrum purus. Phasellus eleifend pretium rhoncus. Curabitur et orci elit.<br /><br />

                        <h2>Nullam Tristique</h2> Tortor magna, quis elementum nunc maximus ac. Aenean eros dui, vestibulum ut pellentesque rhoncus, auctor at nibh. Mauris ultricies vulputate ex, eu varius arcu vulputate at. Vivamus imperdiet arcu metus, a congue tortor hendrerit eu. Donec iaculis tellus sit amet lacus varius, id venenatis neque porttitor. Sed posuere diam vitae ipsum efficitur, at scelerisque diam interdum. Vivamus rhoncus augue ac tortor scelerisque, sit amet vehicula enim fringilla. Aenean sodales tincidunt risus. Sed tincidunt scelerisque sem, in aliquam dolor pulvinar sit amet. Proin eget efficitur risus. Vestibulum fermentum imperdiet pharetra. Phasellus et aliquam lorem. Pellentesque pellentesque cursus ex ut imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br /><br />

                        Nam eu lacus non justo convallis maximus eget quis est. Donec ullamcorper quis tellus eget facilisis. Sed quis ante ut tellus tempus ultricies gravida et neque. Sed ac nulla ex. Sed consequat justo est, sed tempor justo sagittis id. Aenean lacinia, erat in suscipit lobortis, nisi magna hendrerit ante, vel consectetur nulla dui ac diam. Etiam blandit, nisi id ullamcorper gravida, nunc diam aliquam massa, pretium ornare ligula nisl fringilla nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut facilisis sem. Integer blandit ut ligula et scelerisque. Nullam fringilla enim ut nisi finibus, at mattis urna tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis egestas arcu.<br /><br />

                        <h2>Sed Ante Dolor</h2> Commodo a interdum efficitur, tincidunt et nisi. In congue fermentum mauris nec rhoncus. Vestibulum imperdiet mauris a tortor facilisis laoreet. Pellentesque non mi non velit scelerisque scelerisque et et magna. Nullam eu libero vitae est placerat congue. Praesent sollicitudin est sed mauris viverra lacinia. Vestibulum dapibus quam velit, sed venenatis lacus ultrices sit amet. Fusce efficitur, ex sit amet fringilla bibendum, sapien mauris ultricies turpis, eget consectetur leo ligula eget urna. Aenean iaculis erat id purus ornare blandit. Nam tempus vehicula risus eleifend tincidunt.<br /><br />

                        Donec a interdum libero. Cras a lectus laoreet, placerat neque at, tincidunt ipsum. Etiam venenatis turpis velit, vitae suscipit risus congue ut. Integer eleifend magna vitae turpis aliquet ultrices. Phasellus efficitur, magna id pretium blandit, tortor ligula vehicula justo, eget scelerisque nibh est eu libero. Praesent maximus lacus velit, sit amet mollis quam ornare nec. In tincidunt scelerisque felis at sollicitudin. Proin sed tortor in sem consequat mattis. Donec sed neque dignissim, vulputate ex sit amet, aliquet lacus. Donec at faucibus metus. Suspendisse tellus diam, tincidunt ac lacus at, consectetur eleifend mauris. Donec varius sollicitudin tellus in auctor. Vivamus luctus nunc eget dapibus dapibus. Nunc vitae vestibulum dolor. Cras sed consequat nulla, eu condimentum est. Ut consectetur hendrerit erat, et euismod urna.<br /><br />
                    </p>
                </Row>
            </Container>
        </>
    )
}
export default Post
