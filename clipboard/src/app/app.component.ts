import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clipboard';

  section1 = {
    title: "A history of everything you copy",
    subtitle: "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
  };

  section2 = {
    title: "Keep track of your snippets ",
    subtitle: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devicecs. Our Mac and iOS apps will help you organize everything.",
    img: "assets/images/image-computer.png",
    alt: "snippets"
  };

  section3 = {
    title: "Access Clipboard Anywhere",
    subtitle: "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
    img: "assets/images/image-devices.png",
    alt: "access"
  };

  section4 = {
    title: "Supercharge your workflow",
    subtitle: "We've got the tools to boost your productivity."
  }

  section5 = {
    title: "Clipboard for iOS and Mac OS",
    subtitle: "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
  }

  columnList = [
    {
      title: "Quick Search",
      subtitle: "Easily search your snippets by content, category, web address, application, and more."
    },
    {
      title: "iCloud Sync",
      subtitle: "Instantly saves and syncs snippets across all your devices."
    },
    {
      title: "Complete History",
      subtitle: "Retrieve any snippets from the first moment you started using the app."
    }
  ]

  rowList = [
    {
      img: "assets/images/icon-blacklist.svg",
      alt: "blacklists",
      title: "Create blacklists",
      subtitle:"Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
    },
    { 
      img: "assets/images/icon-text.svg",
      alt: "snippets",
      title: "Plain text snippets",
      subtitle: "Remove unwanted formatting from copied text for a consistent look."
    },
    { 
      img: "assets/images/icon-preview.svg",
      alt: "preview",
      title: "Sneak preview",
      subtitle: "Quick preview of all snippets on your Clipboard for easy access."
    }
  ]

  logoList = [
    {
      img: "assets/images/logo-google.png",
      alt: "google"
    },
    {
      img: "assets/images/logo-ibm.png",
      alt: "ibm"
    },
    {
      img: "assets/images/logo-microsoft.png",
      alt: "microsoft"
    },
    {
      img: "assets/images/logo-hp.png",
      alt: "hp"
    },
    {
      img: "assets/images/logo-vector-graphics.png",
      alt: "vector"
    },

  ]

  footerList = [
    { title: "FAQs"},
    { title: "Contact Us"},
    { title: "Privacy Policy"},
    { title: "Press Kit"},
    { title: "Install Guide"},
  ]

  iconList = [
    {
      img: "assets/images/icon-facebook.svg",
      alt: ""
    },
    {
      img: "assets/images/icon-twitter.svg",
      alt: ""
    },
    {
      img: "assets/images/icon-instagram.svg",
      alt: ""
    }
  ]

  btn = {
    textA: "Download for iOS ",
    textB: "Download for Mac"
  };

  
}
