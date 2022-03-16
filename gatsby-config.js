module.exports = {
 plugins: [
   "@marscollective/gatsby-theme-link-free",
   {
     resolve: "gatsby-plugin-plausible",
     options: {
       domain: "links.sarasana.studio",
     },
   },
 ],
};
