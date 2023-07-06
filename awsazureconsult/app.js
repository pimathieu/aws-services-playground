// Function to handle the routing based on URL hash
function handleRoute() {
    var hash = window.location.hash;
    var content = document.getElementById('content');

    if (hash === '#/aws') {
        content.innerHTML = '<h2>AWS Consulting</h2><p>Content about AWS consulting goes here.</p>';
    } else if (hash === '#/azure') {
        content.innerHTML = '<h2>Azure Consulting</h2><p>Content about Azure consulting goes here.</p>';
    } else if (hash === '#/switch'){
        reloadPageWithDifferentCSS('colorstyles.css');
    }
    else {
        content.innerHTML = '<h2>About this Space</h2>'
        + '<p>Introduction:<br> In the ever-evolving landscape of cloud computing, professionals working with Amazon Web Services (AWS) and Microsoft Azure constantly strive to optimize their workflows and make the most of these powerful platforms. This article aims to assist hands-on professionals in both areas by providing insights and practical examples based on a decade of experience in the field. By sharing the source code and best practices implemented for customers over the years, this work aims to empower professionals to leverage proven strategies and enhance their proficiency in AWS and Azure environments.</p>'
        + '<p>Sharing the Source:<br> Throughout my 10 years of experience working with AWS and Azure, I have had the privilege of collaborating with numerous clients, solving complex challenges, and implementing robust solutions. This work opens up the source code of the projects I have worked on, allowing professionals to examine real-world examples and extract valuable lessons. By providing access to this code, I hope to facilitate a deeper understanding of best practices and inspire further innovation within the community.</p>'
        + '<p>AWS Best Practices:<br>Infrastructure as Code (IaC): Demonstrating the use of tools like AWS CloudFormation and Terraform, the provided source code showcases the benefits of managing infrastructure declaratively. By codifying infrastructure, professionals can easily replicate environments, automate deployments, and enforce consistency across deployments.</p>'
        + '<p></p>'
        + '<p></p>'
        ;
    }   
}

function reloadPageWithDifferentCSS(cssFilePath) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.rel === 'stylesheet') {
        link.href = cssFilePath;
      }
    }
    //location.reload();
  }
  


// Event listener for hash change
window.addEventListener('hashchange', handleRoute);

// Initial route handling
handleRoute();
