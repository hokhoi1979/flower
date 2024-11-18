import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./News.scss"

function News() {
  return (
    <>
    <Header/>

    <div className="NewsPage__title">
        <p>News of The's Flower</p>
    </div>

    <div className="NewsPage__divider"></div>

    <div className="row NewsPage">
        <div className="col-md-6 NewsPage__left">
            <iframe width="700" height="422" src="https://www.youtube.com/embed/i810CxN5Q6Q" allowfullscreen></iframe>
        </div>

        <div className="col-md-6 NewsPage__right">
            <p>
            Many flowering plants can self-pollinate, or transfer pollen between their own blossoms for seed generation and propagation, 
            but most of these plants have relied on pollinators such as butterflies and bees to reproduce.
            Now — amid declines reported in many pollinator populations — a new study on the evolution of one flower species’ mating system 
            has revealed a remarkable shift that could exacerbate the challenges faced by the plants’ insect partners.
            </p>
            <p>
            The flowers’ reproductive evolution may be linked to environmental changes such as habitat destruction and rapid ongoing decreases 
            in pollinator biodiversity, according to Samson Acoca-Pidolle, who led the study published December 19 in the journal New Phytologist.
            </p>
        </div>
    </div>

    <div className="infor1">
        <h3>
        An insurance policy
        </h3>
        <p>
        An increase in a flowering plant species self-pollinating, or “selfing,” isn’t always a bad thing, said Gretchen LeBuhn, a professor of 
        biology at San Francisco State University who has studied interactions between pollinators and plants.
        “The way to think of (selfing) is it’s sort of like a holding-on strategy,” said LeBuhn, who was not involved with the study. Although 
        increasing selfing does often lead to a decline in genetic variation in a population, among several other negative consequences, it also can maintain the population, she added. “Like an insurance policy.”
        </p>

        <h3>
        Humankind’s lasting footprint
        </h3>
        <p>
        Other recent studies have found that declining pollinator populations, an offshoot of harmful human activities, threaten the future of food 
        crops and the survival of the many species that depend on them.
        The growing body of research bolsters the case for urgent conservation measures — like developing and protecting flower-rich habitats that act 
        as floral and nesting resources — to help stymie global pollinator declines, according to Acoca-Pidolle.
        </p>
    </div>

    <div className="NewsPage__img">
        <img src="https://i.pinimg.com/474x/c5/50/f7/c550f748eb4d957f03ce4f6605cbfb25.jpg"alt="" />
    </div>

    <div className="infor1">
        <h3>
        Resurrecting plants
        </h3>
        <p>
        Using a method called “resurrection ecology” to conduct the research, the study team germinated the seeds of four populations of wild field pansies,
        scientifically known as Viola arvensis, that were collected in the 1990s and early 2000s in the Paris region.
        </p>

        <h3>
        Humankind’s lasting footprint
        </h3>
        <p>
        Other recent studies have found that declining pollinator populations, an offshoot of harmful human activities, threaten the future of food 
        crops and the survival of the many species that depend on them.
        The growing body of research bolsters the case for urgent conservation measures — like developing and protecting flower-rich habitats that act 
        as floral and nesting resources — to help stymie global pollinator declines, according to Acoca-Pidolle.
        </p>
    </div>

    <Footer/>
    </>
  )
}

export default News;