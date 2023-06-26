import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const baseUrl = "https://vasifaliyev.com";

// Define the routes of your website
const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/project/1", changefreq: "monthly", priority: 0.8 },
    // Add more routes for your projects
];

// Create the sitemap stream
const sitemapStream = new SitemapStream({ hostname: baseUrl });

// Add the routes to the sitemap stream
routes.forEach((route) => {
    sitemapStream.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
    });
});

sitemapStream.end();

streamToPromise(sitemapStream)
    .then((xml) => {
        const fileStream = createWriteStream("sitemap.xml");
        fileStream.write(xml);
        fileStream.end();
        console.log("Sitemap generated successfully!");
    })
    .catch((error) => {
        console.error("Error generating sitemap:", error);
    });
