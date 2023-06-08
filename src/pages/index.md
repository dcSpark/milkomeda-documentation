import milkomedaBanner from "@site/static/img/milkomeda-banner.png";
import algorand from "@site/static/img/brand/a1-white-default.png";
import cardano from "@site/static/img/brand/c1-white-default.png";

<img src={milkomedaBanner} className="img-full" alt="" />


<nav class="pagination-nav docusaurus-mt-lg" aria-label="Docs pages">
    <a class="pagination-nav__link pagination-nav__link--prev" href="/home/intro-c1">
        <h3 class="text-center items-center">
            Getting Started with
        </h3>
        <img src={algorand} className="img-full" />
    </a>
    <a class="pagination-nav__link pagination-nav__link--next" href="/home/intro">
        <h3 class="text-center">
            Getting Started with
        </h3>
        <img src={cardano} className="img-full" />
    </a>
</nav>
