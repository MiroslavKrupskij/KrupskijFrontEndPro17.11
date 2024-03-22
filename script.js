function displayError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}

function searchPost() {
  const postId = parseInt(document.getElementById('postIdInput').value);

  if (isNaN(postId) || postId < 1 || postId > 100) {
    displayError('Введіть коректний ID поста.');
    return;
  }

  fetchPost(postId)
    .then(post => {
      document.getElementById('post').innerHTML = `
        <p><strong>User ID:</strong> ${post.userId}</p>
        <p><strong>ID:</strong> ${post.id}</p>
        <p><strong>Назва:</strong> ${post.title}</p>
        <p><strong>Зміст:</strong> ${post.body}</p>
      `;
      document.getElementById('postContainer').style.display = 'block';
    })
    .catch(error => {
      displayError(error.message);
    });
}

function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Пост не знайдено.');
        }
        return response.json();
      })
      .then(post => {
        resolve(post);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function fetchComments() {
  const postId = parseInt(document.getElementById('postIdInput').value);

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
      const commentsContainer = document.getElementById('comments');
      commentsContainer.innerHTML = '';
      comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
          <p><strong>Post ID:</strong> ${comment.postId}</p>
          <p><strong>ID:</strong> ${comment.id}</p>
          <p><strong>Ім'я:</strong> ${comment.name}</p>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p><strong>Текст:</strong> ${comment.body}</p>
          <hr>
        `;
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch(error => {
      displayError('Не вдалося завантажити коментарі.');
    });
}