function goToDifferentPage(name) {
  window.open(`${name}.html`, "_self");
}

function submitQuery(event) {
  event.preventDefault();
  const contactFormElements = document.getElementById("contactForm").elements;
  const name = encodeURIComponent(contactFormElements['name'].value.trim());
  const subject = encodeURIComponent(contactFormElements['subject'].value.trim() || `Query from ${name}`);
  let body = contactFormElements['body'].value.trim();
  if (name != "" && body != "") {
    body = encodeURIComponent(`Enquiry: ${body}\n\nFrom: ${name}`);
    window.location.href = `mailto:hello@nzarchviz.co.nz?subject=${subject}&body=${body}`;
  }
}
