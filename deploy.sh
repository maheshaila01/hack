echo "Switching to branch master"
git checkout main

echo "Building app...."
npm run build


echo "Deploying files to server.."
scp -rf build/* mahesh@192.168.0.102:/var/www/html/build/

echo "Done!!!"