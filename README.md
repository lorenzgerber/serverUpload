# serverUpload

### Testing the connection
The connection can be tested for example with curl:
```
curl -k -X POST -F "sampleFile=@test.txt" "http://localhost:8000/upload"
```
