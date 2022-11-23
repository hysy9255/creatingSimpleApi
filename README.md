# creatingSimpleApi

### git clone 부터 프로젝트 셋업 순서
#### 1. 깃헙에서 프로젝트 로컬로 내려받기

git clone <해당 repo url> 을 통해 github에 올라가 있는 프로젝트를 로컬로 내려받는다. 

`git clone https://github.com/hysy9255/creatingSimpleApi.git`

#### 2. 해당 프로젝트로 이동해서 package.json 파일에 명시 되어있는 dependency(패지키들) 설치하기
npm init -y 명령어는 빈 폴더를 node 프로젝트로 만드는 것에 반해

여기서는 클론해온 폴더에 이미 package.json 파일이 들어가 있기 때문에 npm init -y를 하지 않고

다만 package.json 에 명시된 패키지들을 설치하기 위해 아래 커맨드만 실행한다.

`npm install`

#### 3. 위를 실행하면 해당 폴더에 node_modules 폴더가 생성된 것을 확인할 수 있음.


### 파일 순서
1. basic_get.js
2. basic_get2.js
3. basic_post.js
