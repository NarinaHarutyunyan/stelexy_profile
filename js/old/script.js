console.log('%cDeveloped by Djigit', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34',
  'color: #c434c4; background: #eee; font-size: 30px '
);

function getScale(){
  innerW = window.innerWidth;

  if(innerW>=1820){
      return 1;
  } else if (innerW >= 1460){
      return 0.8;
  }
}

document.querySelector("html").style.fontSize = getScale() + "px";

if(getScale()==0.8){

  document.querySelectorAll(".more-option").forEach((el)=>{
    el.classList.add("scaled");
  })

  document.querySelectorAll(".repost-popup").forEach((el)=>{
    el.classList.add("scaled");
  })

  document.querySelectorAll(".raiting-popup").forEach((el)=>{
    el.classList.add("scaled");
  })
}

// 
// Header profile dropdown
// 

let profileDropDown = document.querySelector(".profile_dropdown");
let profileDropDownOpen = document.querySelector(".profile-more");
let profileDropDownClose = document.querySelector(".close-dropdown");

if(profileDropDown){

  profileDropDownOpen.addEventListener("click",()=> {
    if(profileDropDownOpen.classList.contains("active")){
      profileDropDown.classList.remove("profile_dropdown-active");
      profileDropDownOpen.classList.remove("active");
    }
    else{
      profileDropDown.classList.add("profile_dropdown-active");
      profileDropDownOpen.classList.add("active"); 
    }
       
  })

  profileDropDownClose.addEventListener("click",()=> {
    profileDropDown.classList.remove("profile_dropdown-active");
    profileDropDownOpen.classList.remove("active");
  })

  document.addEventListener("click", (e)=>{
    obj = e.path
  
    if(!CheckExistClass(obj, "profile_dropdown") && !CheckExistClass(obj, "profile-more")){
      
      profileDropDown.classList.remove("profile_dropdown-active");
      profileDropDownOpen.classList.remove("active");
    }
    
  })

}

// 
// Subscribe
// 

let subscribeBlk = document.querySelectorAll(".subscribe-blk")

if(subscribeBlk.length > 0){

  subscribeBlk.forEach((el)=>{

    let SubscribeCheckbox = el.querySelector(".subscribe-input");
    let SubscribeBtn = el.querySelector(".subscribe-btn");
    let UnsubscribeBtn = el.querySelector(".unsubscribe-btn");
    let UnsubscribeBlk = el.querySelector(".subscribed");
    let UnsubscibeDropDown = el.querySelector(".subscibed-menu");
    let UnsubscibeDropDownOpen = el.querySelector(".subscribed>p");

    if(UnsubscibeDropDown){

      UnsubscibeDropDownOpen.addEventListener("click",()=> {
        if(UnsubscibeDropDownOpen.classList.contains("active")){
          UnsubscibeDropDown.classList.remove("subscribed-menu-active");
          UnsubscibeDropDownOpen.classList.remove("active")
        }
        else{
          UnsubscibeDropDown.classList.add("subscribed-menu-active");
          UnsubscibeDropDownOpen.classList.add("active")
        }
        
      })

    }

    document.addEventListener("click", (e)=>{
      obj = e.path
      
      if(!CheckExistClass(obj, "subscribed")){
        UnsubscibeDropDown.classList.remove("subscribed-menu-active");
        UnsubscibeDropDownOpen.classList.remove("active")
      }
      
    })

    SubscribeBtn.addEventListener("click", ()=>{
      SubscribeBtn.style.display = "none";
      UnsubscribeBlk.style.display = "block";
      SubscribeCheckbox.checked = true;
    })

    UnsubscribeBtn.addEventListener("click", ()=>{
      SubscribeBtn.style.display = "block";
      UnsubscribeBlk.style.display = "none";
      SubscribeCheckbox.checked = false;
    })

  })

}


function closeAllPopups(){
  let popupsList = document.querySelectorAll(".popup");
  
  for (let i = 0; i < popupsList.length; i++) {
      popupsList[i].classList.remove("popup-active");
  }
} 

function CheckExistClass(objList, classToFind){
  let exist = false;
  
  if(objList.length > 0){

      for (let b = 0; b < (objList.length-2); b++) {

          for (let i = 0; i < objList[b].classList.length; i++) {
              if(objList[b].classList[i] == classToFind){
                  exist = true;
              }
          }
      }
  }

  if(exist == true){
      return true;
  }
  else{
      return false;
  }
}


// 
// Write-New
// 

let WriteNewBlk = document.querySelectorAll(".write-new");

if(WriteNewBlk.length > 0){

  WriteNewBlk.forEach((el)=>{
    let WriteNewInput = el.querySelector("textarea");
  
    WriteNewInput.addEventListener("click", ()=>{
      el.classList.add("input-active")
    })

    document.addEventListener("click", (e)=>{
      obj = e.path
    
      if(!CheckExistClass(obj, "write-new")){
        
        if(!(WriteNewInput.value.length>0)){
          el.classList.remove("input-active");
        }
        
      }
    })
  })
  
}



// 
// Etc
// 

let moreBlk = document.querySelectorAll(".more");

if(moreBlk.length >0){
  
  for (let i = 0; i < moreBlk.length; i++) {
    
    moreBlk[i].querySelector("img").addEventListener("click", ()=>{
      if(moreBlk[i].classList.contains("more-option-active")){
        moreBlk[i].classList.remove("more-option-active")
      }else{
        moreBlk[i].classList.add("more-option-active")
      }
      
    }) 
  }

  document.addEventListener("click", (e)=>{
    obj = e.path
  
    if(!CheckExistClass(obj, "more")){
      for (let i = 0; i < moreBlk.length; i++) {
        moreBlk[i].classList.remove("more-option-active");
      }
      
    }
    
  })
}

// 
// Raiting
// 

let raitingBlk = document.querySelectorAll(".raiting-block");

if(raitingBlk.length > 0){

  for (let i = 0; i < raitingBlk.length; i++) {
    
    let raitingUp = raitingBlk[i].querySelector(".up");
    let raitingScore = raitingBlk[i].querySelector(".raiting");
    let raitingDown = raitingBlk[i].querySelector(".down");

    let startAmount = raitingScore.innerHTML

    raitingUp.addEventListener("click", ()=>{

      if(!raitingUp.classList.contains("active")){
        raitingScore.innerHTML =  Number.parseInt(startAmount) + 1;
        raitingUp.classList.add("active")
        raitingDown.classList.remove("active")
      }
      else{
        raitingScore.innerHTML =  startAmount;
        raitingUp.classList.remove("active");
      }
      
    })

    raitingDown.addEventListener("click", ()=>{

      if(!raitingDown.classList.contains("active")){
        raitingScore.innerHTML =  Number.parseInt(startAmount) - 1;
        raitingDown.classList.add("active")
        raitingUp.classList.remove("active")
      }
      else{
        raitingScore.innerHTML =  startAmount;
        raitingDown.classList.remove("active");
      }
    })
  }
}

// 
// Comment system
// 

let postComment = document.querySelectorAll(".post_comments");
updateComments()

postComment.forEach((el)=>{
  let mainCommentInput = el.querySelector(".main-comment-input > .comment-input");

  mainCommentInput.querySelector(".send-message").addEventListener("click", ()=>{
    let mainCommentInputText = mainCommentInput.querySelector(".textarea");

    if(!(mainCommentInputText.querySelector(".placeholder"))){
      let date = new Date();
      let fullDate = date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
      
      CreateCommentBlock(
        el.querySelector(".comments-wrapper"),
        "./img/profile-photo.png",
        "Ivanov Ivan",
        mainCommentInputText.textContent,
        fullDate
      )
      updateComments()

      mainCommentInput.querySelector(".textarea").innerHTML = `<span class="placeholder">${mainCommentInput.querySelector(".textarea").getAttribute("placeholder")}</span>`
    }

  })
})

function updateComments(){
  postComment = document.querySelectorAll(".post_comments");

  if(postComment.length > 0){

    for (let i = 0; i < postComment.length; i++) {
      
      

      let CommentBlk = postComment[i].querySelectorAll(".comment-blk");
      CommentBlk.forEach((currentBlk)=>{
        
        // Ответ подкомментариев
        let subCommentInput = currentBlk.querySelector(".sub-comment-blk").querySelector(".comment-input");
        let subCommentGroup = currentBlk.querySelector(".sub-comment-group");
        let subCommentAnswerBtn = subCommentGroup.querySelectorAll(".answer");
        
        // При клике проявляем инпут и вставляем имя того, кто упомянул
        subCommentAnswerBtn.forEach((answerBtn)=>{
          SubCommentInputOpen(answerBtn);
        }) 

        // При клике на кнопку постится блок с текстом
        subCommentInput.querySelector(".send-message").addEventListener("click", ()=>{

          let subCommentInputText = subCommentInput.querySelector(".textarea");
          
          if(!(subCommentInputText.innerHTML.length - subCommentInputText.querySelector(".mention").textContent.length < 38)){
            CreateSubCommentBlock(subCommentGroup, "./img/profile-photo.png", "Ivan Ivanov", subCommentInputText.innerHTML, "16.04.2021");
            subCommentAnswerBtn = UpdateSubAnswerBtns(postComment[i])

            subCommentAnswerBtn.forEach((answerBtn)=>{
              SubCommentInputOpen(answerBtn);
            }) 
          }

          CloseAndCleanAllSubCommmentInputs();
        })

        // Ответ комментариев
        let CommentAnswerBtn = currentBlk.querySelector(".main-comment").querySelector(".answer");
        
        SubCommentInputOpen(CommentAnswerBtn);

      })
    }
  }
}

// При клике проявляем инпут и вставляем имя того, кто упомянул
function SubCommentInputOpen(AnswerBtn){
  AnswerBtn.addEventListener("click", ()=>{
    console.log(AnswerBtn);
    let mentorName = AnswerBtn.parentNode.parentNode.querySelector(".name").textContent;

    let subCommentInput = AnswerBtn.parentNode.parentNode.parentNode.querySelector(".comment-input");
    subCommentInput.classList.add("active");
    console.log(subCommentInput = AnswerBtn.parentNode.parentNode.parentNode);
    subCommentInput.querySelector(".textarea").innerHTML= `<span class="mention">${mentorName},</span> &nbsp; `;
  })
  
}

function CloseAndCleanAllSubCommmentInputs(){
  let SubCommentInput = document.querySelectorAll(".sub-comment-blk .sub-comment-input .comment-input");
  let SubCommentInputTextArea = document.querySelector(".textarea");
  SubCommentInputTextArea.innerHTML = `<span class="placeholder">${SubCommentInputTextArea.getAttribute("placeholder")}</span>`

  SubCommentInput.forEach((el)=>{
    el.classList.remove("active")
  })
}

function UpdateSubAnswerBtns(postCommentBlock){
  subCommentAnswerBtn = postCommentBlock.querySelector(".sub-comment-group").querySelectorAll(".answer");
  
  return subCommentAnswerBtn;
}

function UpdateAnswerBtns(postCommentBlock){
  CommentAnswerBtn = postCommentBlock.querySelector(".sub-comment-group").querySelectorAll(".answer");
  
  return CommentAnswerBtn;
}

function CreateCommentBlock(whereToAddBlk,imageSource,name, text, date){

  let CommentBlockTemplate = `
  <div class="comment-blk">
  <div class="comment main-comment">
      <div class="comment_header">
          <img src="${imageSource}" alt="thumb">
          <p class="name">
            ${name}
          </p>
      </div>

      <div class="comment_text">
          <p>
            ${text}
          </p>
      </div>

      <div class="comment_footer">
          <p class="date">
            ${date}
          </p>
          <button class="answer">to answer</button>
      </div>

      <div class="comment_likes">
          <p>
              <span class="likes-amount">0</span>
              <span>
                <img src="./img/svg/comment-like.svg" alt="like">
              </span>
          </p>
      </div>
  </div>

  <div class="sub-comment-blk">

      <div class="sub-comment-group">
      </div>
      
      <div class="sub-comment-input">
          <div class="comment-input">
              <img src="./img/profile-photo.png" alt="thumb" class = "user-thumb">
              <div class="input-group">
              <div class = "textarea" contenteditable="true" placeholder="Write a comment">
                  <span class="placeholder">Write a comment</span>
              </div>
                  <div class="button-group">
                      <button class="send-photo">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.125 21.125H4.875C4.44402 21.125 4.0307 20.9538 3.72595 20.649C3.4212 20.3443 3.25 19.931 3.25 19.5V8.125C3.25 7.69402 3.4212 7.2807 3.72595 6.97595C4.0307 6.67121 4.44402 6.5 4.875 6.5H8.1244L9.7494 4.0625H16.2494L17.8744 6.5H21.125C21.556 6.5 21.9693 6.67121 22.274 6.97595C22.5788 7.2807 22.75 7.69402 22.75 8.125V19.5C22.75 19.931 22.5788 20.3443 22.274 20.649C21.9693 20.9538 21.556 21.125 21.125 21.125Z" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M13 17.0625C15.0193 17.0625 16.6562 15.4255 16.6562 13.4062C16.6562 11.387 15.0193 9.75 13 9.75C10.9807 9.75 9.34375 11.387 9.34375 13.4062C9.34375 15.4255 10.9807 17.0625 13 17.0625Z" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>    
                      </button>

                      <button class="send-file">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.2494 8.12451L7.78845 16.726C7.4837 17.0307 7.3125 17.444 7.3125 17.875C7.3125 18.306 7.4837 18.7193 7.78845 19.0241C8.0932 19.3288 8.50652 19.5 8.9375 19.5C9.36848 19.5 9.7818 19.3288 10.0865 19.0241L20.1725 8.79761C20.4743 8.49582 20.7137 8.13754 20.877 7.74323C21.0403 7.34892 21.1244 6.92631 21.1244 6.49951C21.1244 6.07272 21.0403 5.6501 20.877 5.25579C20.7137 4.86148 20.4743 4.5032 20.1725 4.20141C19.8707 3.89962 19.5124 3.66023 19.1181 3.4969C18.7238 3.33358 18.3012 3.24951 17.8744 3.24951C17.4476 3.24951 17.025 3.33358 16.6307 3.4969C16.2364 3.66023 15.8781 3.89962 15.5763 4.20141L5.49035 14.4279C4.57611 15.3421 4.0625 16.5821 4.0625 17.875C4.0625 19.1679 4.57611 20.4079 5.49035 21.3222C6.40459 22.2364 7.64457 22.75 8.9375 22.75C10.2304 22.75 11.4704 22.2364 12.3846 21.3222L20.7182 12.9995" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                      </button>

                      <button class="send-emoji">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.2224 15.4371C16.7941 16.178 16.1784 16.7931 15.4372 17.2207C14.696 17.6483 13.8554 17.8735 12.9997 17.8735C12.1439 17.8735 11.3033 17.6484 10.5621 17.2207C9.82085 16.7931 9.20518 16.178 8.77686 15.4372" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M15.8655 22.3221C13.7872 22.9594 11.5554 22.8831 9.52548 22.1054C7.49554 21.3276 5.78413 19.8932 4.66372 18.0303C3.54331 16.1675 3.0783 13.9833 3.34273 11.8257C3.60716 9.66797 4.58582 7.66077 6.12291 6.1236C7.66 4.58644 9.66716 3.60768 11.8248 3.34315C13.9825 3.07862 16.1667 3.54352 18.0296 4.66385C19.8925 5.78417 21.327 7.49551 22.1048 9.52542C22.8827 11.5553 22.9591 13.7871 22.3218 15.8654L15.8655 22.3221Z" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M9.34375 11.9844C9.90466 11.9844 10.3594 11.5297 10.3594 10.9688C10.3594 10.4078 9.90466 9.95312 9.34375 9.95312C8.78284 9.95312 8.32812 10.4078 8.32812 10.9688C8.32812 11.5297 8.78284 11.9844 9.34375 11.9844Z" fill="#3F3F3F"/>
                              <path d="M16.6562 11.9844C17.2172 11.9844 17.6719 11.5297 17.6719 10.9688C17.6719 10.4078 17.2172 9.95312 16.6562 9.95312C16.0953 9.95312 15.6406 10.4078 15.6406 10.9688C15.6406 11.5297 16.0953 11.9844 16.6562 11.9844Z" fill="#3F3F3F"/>
                          </svg>   
                      </button>

                      <button class="send-message">
                          send
                      </button>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
  </div>

  `

  whereToAddBlk.innerHTML += CommentBlockTemplate;

}

function CreateSubCommentBlock(whereToAddBlk,imageSource,name, text, date){

  let CommentBlockTemplate = `
  <div class="comment">
      <div class="comment_header">
          <img src="${imageSource}" alt="thumb">
          <p class="name">${name}</p>
      </div>

      <div class="comment_text">
          <p>
            ${text}
          </p>
      </div>

      <div class="comment_footer">
          <p class="date">
            ${date}
          </p>
          <button class="answer">to answer</button>
      </div>

      <div class="comment_likes">
          <p>
              <span class="likes-amount">202</span>
              <span>
                  <img src="./img/svg/comment-like.svg" alt="like">
              </span>
          </p>
      </div>
  </div>

  `

  whereToAddBlk.innerHTML += CommentBlockTemplate;

}

// 
// Content Editable Placeholder
// 

// Кастомная textarea для того, что-бы в ней можно было сделать цветной текс
let ContentEditable = document.querySelectorAll("div[contenteditable='true']");

if(ContentEditable.length > 0){
  ContentEditable.forEach((el)=>{

    // При фокусе очищаем
    el.addEventListener("focus", ()=>{
      if(el.querySelector(".placeholder")){
        el.innerHTML = "";
      }
    })

    // При выходе из фокуса заполняем плейсхолдером
    el.addEventListener("focusout", ()=>{
      if(el.innerHTML.length == 0 || el.innerHTML == "<br>"){
        el.innerHTML = `<span class = "placeholder"> ${el.getAttribute("placeholder")}</span> `
      }
    })
  })
}

// 
//  Comment likes 
// 

let commentLike = document.querySelectorAll(".comment_likes");

if(commentLike.length > 0){

  commentLike.forEach((el)=>{
    let likeBtn = el.querySelector("svg");
    let likeText = el.querySelector(".likes-amount");

    likeBtn.addEventListener("click", ()=>{
      if(el.classList.contains("like-checked")){
        likeText.textContent--;
        el.classList.remove("like-checked");
      }
      else{
        likeText.textContent++;
        el.classList.add("like-checked");
      }
      
    })
  })

}

// 
// Repost
// 

let repostBlk = document.querySelectorAll(".reposts");

if(repostBlk.length >0){
  
  
  for (let i = 0; i < repostBlk.length; i++) {
    
    repostBlk[i].addEventListener("click", ()=>{
      repostBlk[i].parentNode.querySelector(".repost-popup").classList.add("active")
    }) 
  }

  document.addEventListener("click", (e)=>{
    obj = e.path
  
    if(!CheckExistClass(obj, "repost-popup") && !CheckExistClass(obj, "reposts")){
      
      for (let i = 0; i < repostBlk.length; i++) {
        repostBlk[i].parentNode.querySelector(".repost-popup").classList.remove("active")
      }
      
    }
    
  })
}

// 
// Photo popup
// 

let photoPopup = document.querySelector(".photo_popup");

if(photoPopup){
  let photoPopupOpen = document.querySelectorAll(".photo-pp-open");

  photoPopupOpen.forEach((e)=>{
    e.addEventListener("click", ()=>{
      photoPopup.classList.add("popup-active");
      checkHeight(photoPopup)
    })
  })

  document.addEventListener("click", (e)=>{
    obj = e.path
  
    if(!CheckExistClass(obj, "popup-wrapper") && !CheckExistClass(obj, "photo-pp-open")){
      
      photoPopup.classList.remove("popup-active");
      
    }
    
  })
}

// 
// Write a message popup
// 

let writeAMessagePopup = document.querySelector(".write-a-message-popup");

if(writeAMessagePopup){
  let writeAMessagePopupOpen = document.querySelector(".write-a-message");
  let writeAMessagePopupClose = writeAMessagePopup.querySelector(".close");

  writeAMessagePopupOpen.addEventListener("click", ()=>{
    writeAMessagePopup.classList.add("active");
  })

  writeAMessagePopupClose.addEventListener("click", ()=>{
    writeAMessagePopup.classList.remove("active");
  })

}


// 
// Video popup
// 

let videoPopup = document.querySelector(".video_popup");

if(videoPopup){
  let videoPopupOpen = document.querySelectorAll(".video-pp-open");

  videoPopupOpen.forEach((e)=>{
    e.addEventListener("click", ()=>{
      videoPopup.classList.add("popup-active");
    })
  })

  document.addEventListener("click", (e)=>{
    obj = e.path
  
    if(!CheckExistClass(obj, "popup-wrapper") && !CheckExistClass(obj, "video-pp-open")){
      
      videoPopup.classList.remove("popup-active");
      
    }
    
  })
}


// 
// Search popup
// 

let SearchBar = document.querySelectorAll(".search-bar");

if(SearchBar.length>0){

  SearchBar.forEach((el)=>{

    let lasSearchPp = el.parentNode.querySelector(".last-search-pp");

    el.addEventListener("input", ()=>{
      if(el.value.length > 0){
        lasSearchPp.classList.add("active");
      }
      else{
        lasSearchPp.classList.remove("active");
      }
    })
  })
  
}

// 
// Repost popup
// 

let repostPopup = document.querySelector(".repost_popup");

if(repostPopup){
  let repostBtn = repostPopup.querySelectorAll(".nav-item");
  let repostBlocks = repostPopup.querySelectorAll(".repost-main");
  let repostPopupClose = repostPopup.querySelector(".close");

  repostBtn.forEach((el)=>{
    el.addEventListener("click",()=>{
      repostBlocks.forEach((elem)=>{
        elem.classList.remove("active");
      })

      repostBtn.forEach((elem)=>{
        elem.classList.remove("active");
      })

      el.classList.add("active");
      
      repostPopup.querySelector(el.getAttribute("data-for")).classList.add("active");
      
    })
  })

  let raitingPopup = document.querySelectorAll(".raiting-popup");

  raitingPopup.forEach((ppOpen)=>{
    ppOpen.addEventListener("click", ()=>{
      repostPopup.classList.add("popup-active")
    })
  })

  repostPopupClose.addEventListener("click", ()=>{
    repostPopup.classList.remove("popup-active");
  })

  document.addEventListener("click", (e)=>{
    obj = e.path

    if(!CheckExistClass(obj, "raiting-popup") && !CheckExistClass(obj, "popup-wrapper")){

      
      repostPopup.classList.remove("popup-active");
      
    }
  })


}

// 
// Aside open
// 

let Aside = document.querySelectorAll("aside");

if(Aside.length > 0){
  let asideOpen = document.querySelector(".nav-burger");

  Aside.forEach((el)=>{
    let closeBtn = el.querySelector(".close");

    if(closeBtn){
      closeBtn.addEventListener("click", ()=>{
        el.classList.remove("active");
      })
    }

    asideOpen.addEventListener("click", ()=>{
      el.classList.add("active");
    })

    document.addEventListener("click", (e)=>{
      obj = e.path

      if(!CheckExistClass(obj, "nav-burger") && !CheckExistClass(obj, "active")){
        el.classList.remove("active");
        
      }
    })
  })
  
}


// 
// Aside  profile dropdown
// 

let asideProfileDropdown = document.querySelector(".profile-menu-open-wrapper");

if(asideProfileDropdown){
  let asideProfileDropdownOpen = asideProfileDropdown.querySelector(".profile-menu-open");
  let asideProfileDropdownMenu = asideProfileDropdown.parentNode.querySelector(".menu");

  asideProfileDropdownOpen.addEventListener("click", ()=>{
    if(asideProfileDropdownOpen.classList.contains("active")){
      asideProfileDropdownMenu.classList.remove("active");
      asideProfileDropdownOpen.classList.remove("active");
    } else{
      asideProfileDropdownMenu.classList.add("active");
      asideProfileDropdownOpen.classList.add("active");
    }

    document.addEventListener("click", (e)=>{
      obj = e.path
  
      if(!CheckExistClass(obj, "profile-menu-open") && !CheckExistClass(obj, "menu")){
  
        asideProfileDropdownMenu.classList.remove("active");
        asideProfileDropdownOpen.classList.remove("active");
      }
    })
    
  })
}

// 
// Mobile photo popup
// 

let mobilePhotoPopup = document.querySelector(".photo-mobile-popup");

if(mobilePhotoPopup){
  let mobilePhotoPopupOpen = document.querySelectorAll(".mobile-photo-pp-open");
  let mobilePhotoPopupClose = mobilePhotoPopup.querySelector(".close")

  mobilePhotoPopupOpen.forEach((el)=>{
    el.addEventListener("click", ()=>{
    
      mobilePhotoPopup.classList.add("active");
      checkHeight(mobilePhotoPopup)
      
    })
  })

  mobilePhotoPopupClose.addEventListener("click", ()=>{
    
    mobilePhotoPopup.classList.remove("active");
    
  })
  
}

function checkHeight(el){

  insideBlock = el.querySelector(".popup-wrapper");

  if(insideBlock){
      elHeight = Number(window.getComputedStyle(insideBlock).height.slice(0,-2));

      if(elHeight >window.innerHeight){
          
          el.style.alignItems = "flex-start";
          el.style.overflowY = "scroll";

      }
  }
}

// 
// Write a message mobile popup
// 

let mobileWriteAMessagePopup = document.querySelector(".write-a-message-popup-mobile");

if(mobileWriteAMessagePopup){
  let mobileWriteAMessagePopupOpen = document.querySelectorAll(".write-a-message");
  let mobileWriteAMessagePopupClose = mobileWriteAMessagePopup.querySelector(".close")

  mobileWriteAMessagePopupOpen.forEach((el)=>{
    el.addEventListener("click", ()=>{
    
      mobileWriteAMessagePopup.classList.add("active");
      
    })
  })

  mobileWriteAMessagePopupClose.addEventListener("click", ()=>{
    
    mobileWriteAMessagePopup.classList.remove("active");
    
  })
  
}

// 
// Post mobile popup
// 

let postMobilePopup = document.querySelector(".post-popup-mobile");

if(postMobilePopup){
  let postMobilePopupOpen = document.querySelectorAll(".post-mobile-open");
  let postMobilePopupClose = postMobilePopup.querySelectorAll(".close")

  postMobilePopupOpen.forEach((el)=>{
    el.addEventListener("click", ()=>{
      document.addEventListener("click", (e)=>{
        obj = e.path
      })
      
      postMobilePopup.classList.add("active");
      
    })
  })

  postMobilePopupClose.forEach((el)=>{
    el.addEventListener("click", ()=>{
    
      postMobilePopup.classList.remove("active");
      
    })
  })
  
  
}

// 
// Bookmarks
// 

let Bookmarks = document.querySelectorAll(".add-to-bookmarks");

if(Bookmarks.length>0){

  Bookmarks.forEach((el)=>{

    el.addEventListener("click",()=>{
  
      if(el.classList.contains("active")){
        el.classList.remove("active");
      } else{
        el.classList.add("active");
      }
    })
  })
}

// 
// Btn up
// 

let BtnUp = document.querySelector(".btn-up");

if (BtnUp){
  document.addEventListener("scroll", ()=>{
    
    if(window.pageYOffset> 1700){
      BtnUp.style.display = "flex";
    } else{
      BtnUp.style.display = "none";
    }

    BtnUp.addEventListener("click", ()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })

  })
}