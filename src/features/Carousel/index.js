import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import "./style.scss";

import gift_display from "assets/gift_display.jpg";
import liquor from "assets/liquor.jpg";
import sign from "assets/sign.jpg";
import storefront from "assets/storefront.jpg";
import wine from "assets/wine.jpg";

const items = [
  {
    src: gift_display,
    altText: "Various alcohol gift sets available for purchase",
    caption: "Gift Set Display",
    description: "Some of the various gift sets we offer!"
  },
  {
    src: liquor,
    altText: "Shelf full of liquor bottles",
    caption: "Liquor Shelf",
    description: "Best selection of liquor nearby!"
  },
  {
    src: sign,
    altText: "Roadside 4-sixes store sign",
    caption: "4-Sixes Sign",
    description: "See this sign, and you're in the right place!"
  },
  {
    src: storefront,
    altText: "A picture of the front of the store",
    caption: "Storefront",
    description: "Come on in!"
  },
  {
    src: wine,
    altText: "Picture of some of the wines for sell",
    caption: "Wine Section",
    description: "Want some wine?  Drop by on Tuesdays for 20% off!"
  }
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.description}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CustomCarousel;
