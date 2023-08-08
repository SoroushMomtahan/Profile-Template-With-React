import './Services.css'
export default function Services() {
    return (
        <section id="services">
            <div class="container">
                <div class="section-info">
                    <h2 class="section-title">SERVICES</h2>
                    <p class="section-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div class="row">
                    <Service title="WEB DESIGN">
                        <i class="bi bi-briefcase"></i>
                    </Service>
                    <Service title="WEB DEVELOPMENT">
                        <i class="bi bi-card-checklist"></i>
                    </Service>
                    <Service title="PHOTOGRAPHY">
                        <i class="bi bi-bar-chart"></i>
                    </Service>
                    <Service title="RESPONSIVE DESIGN">
                        <i class="bi bi-binoculars"></i>
                    </Service>
                    <Service title="GRAPHIC DESIGN">
                        <i class="bi bi-brightness-high"></i>
                    </Service>
                    <Service title="MARKETING SERVICES">
                        <i class="bi bi-calendar4-week"></i>
                    </Service>
                </div>
            </div>
        </section>
    );
}

function Service({ title, children }) {
    return (
        <div class="col-4">
            <div class="service-box">
                <div class="service-icon">
                    {children}
                </div>
                <div class="service-content">
                    <h3 class="service-title">{title}</h3>
                    <p class="service-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        adipisci eaque autem fugiat! Quia, provident vitae! Magni
                        tempora perferendis eum non provident.
                    </p>
                </div>
            </div>
        </div>
    );
}